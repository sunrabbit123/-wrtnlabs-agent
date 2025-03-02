import { Agentica, IAgenticaPrompt } from "@agentica/core";
import {
  HttpLlm,
  IHttpConnection,
  IHttpLlmApplication,
  OpenApi,
  OpenApiV3,
  OpenApiV3_1,
  SwaggerV2,
} from "@samchon/openapi";
import ShoppingApi from "@samchon/shopping-api";
import chalk from "chalk";
import fs from "fs";
import OpenAI from "openai";
import typia from "typia";

import { TestGlobal } from "./TestGlobal";
import { ConsoleScanner } from "./utils/ConsoleScanner";

const trace = (...args: any[]): void => {
  console.log("----------------------------------------------");
  console.log(...args);
  console.log("----------------------------------------------");
};

const main = async (): Promise<void> => {
  if (!TestGlobal.env.CHATGPT_API_KEY?.length) return;

  // GET LLM APPLICATION SCHEMA
  const application: IHttpLlmApplication<"chatgpt"> = HttpLlm.application({
    model: "chatgpt",
    document: OpenApi.convert(
      typia.json.assertParse<
        SwaggerV2.IDocument | OpenApiV3.IDocument | OpenApiV3_1.IDocument
      >(
        await fetch(`https://shopping-be.wrtn.ai/editor/swagger.json`).then(
          (r) => r.text(),
        ),
      ),
    ),
    options: {
      reference: true,
    },
  });
  application.functions = application.functions.filter((f) =>
    f.path.startsWith("/shoppings/customers"),
  );

  // HANDSHAKE WITH SHOPPING BACKEND
  const connection: IHttpConnection = {
    host: "https://shopping-be.wrtn.ai",
  };
  await ShoppingApi.functional.shoppings.customers.authenticate.create(
    connection,
    {
      channel_code: "samchon",
      external_user: null,
      href: "htts://127.0.0.1/NodeJS",
      referrer: null,
    },
  );
  await ShoppingApi.functional.shoppings.customers.authenticate.activate(
    connection,
    {
      mobile: "821012345678",
      name: "John Doe",
    },
  );

  // COMPOSE CHAT AGENT
  const agent: Agentica<"chatgpt"> = new Agentica({
    model: "chatgpt",
    vendor: {
      api: new OpenAI({
        apiKey: TestGlobal.env.CHATGPT_API_KEY,
        baseURL: TestGlobal.env.CHATGPT_BASE_URL,
      }),
      model: "gpt-4o-mini",
      options: TestGlobal.env.CHATGPT_OPTIONS
        ? JSON.parse(TestGlobal.env.CHATGPT_OPTIONS)
        : undefined,
    },
    controllers: [
      {
        protocol: "http",
        name: "shopping",
        connection,
        application,
      },
    ],
    config: {
      locale: "en-US",
    },
  });
  agent.on("initialize", () => console.log(chalk.greenBright("Initialized")));
  agent.on("select", (e) =>
    console.log(
      chalk.cyanBright("selected"),
      e.operation.function.name,
      e.reason,
    ),
  );
  agent.on("call", (e) =>
    console.log(chalk.blueBright("call"), e.operation.function.name),
  );
  agent.on("execute", (e) => {
    console.log(
      chalk.greenBright("execute"),
      e.operation.function.name,
      e.value.status,
    ),
      fs.writeFileSync(
        `${TestGlobal.ROOT}/logs/${e.operation.function.name}.log`,
        JSON.stringify(
          {
            type: "function",
            arguments: e.arguments,
            response: e.value,
          },
          null,
          2,
        ),
        null,
      );
  });
  agent.on("cancel", (e) =>
    console.log(
      chalk.redBright("canceled"),
      e.operation.function.name,
      e.reason,
    ),
  );

  // START CONVERSATION
  while (true) {
    console.log("----------------------------------------------");
    const content: string = await ConsoleScanner.read("Input: ");
    console.log("----------------------------------------------");

    if (content === "$exit") break;
    else if (content === "$usage")
      trace(
        chalk.redBright("Token Usage"),
        JSON.stringify(agent.getTokenUsage(), null, 2),
      );
    else {
      const histories: IAgenticaPrompt<"chatgpt">[] =
        await agent.conversate(content);
      for (const h of histories.slice(1))
        if (h.type === "text")
          trace(chalk.yellow("Text"), chalk.blueBright(h.role), "\n\n", h.text);
        else if (h.type === "describe")
          trace(
            chalk.whiteBright("Describe"),
            chalk.blueBright("agent"),
            "\n\n",
            h.text,
          );
    }
  }
};
main().catch((error) => {
  console.log(error);
  process.exit(-1);
});
