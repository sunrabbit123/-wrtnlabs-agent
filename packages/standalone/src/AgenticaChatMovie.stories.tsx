// @lang ts

import type { Meta, StoryObj } from "@storybook/react";

import { Agentica } from "@agentica/core";
import { OpenAI } from "openai";
import { AgenticaChatMovie } from "./AgenticaChatMovie";

interface AgenticaChatMovieWrapperProps {
  openaiApiKey: string;
}

export function AgenticaChatMovieWrapper({ openaiApiKey }: AgenticaChatMovieWrapperProps) {
  const agent = new Agentica({
    model: "chatgpt",
    vendor: {
      model: "gpt-4o-mini",
      api: new OpenAI({
        apiKey: openaiApiKey,
      }),
    },
    controllers: [],
  });
  return <AgenticaChatMovie agent={agent} />;
}

export default {
  title: "AgenticaChatMovie",
  component: AgenticaChatMovie,
} satisfies Meta<typeof AgenticaChatMovie>;

type Story = StoryObj<typeof AgenticaChatMovie>;

export const Default: Story = {
  args: {},
};
