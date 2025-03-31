import type { Agentica } from "@agentica/core";
import type { ILlmSchema } from "@samchon/openapi";
import type { JSX } from "react";
import "./AgenticaChatMovie.scss";

interface IAgenticaChatApplicationProps<Model extends ILlmSchema.Model> {
  agent: Agentica<Model>;
}

export function AgenticaChatMovie<Model extends ILlmSchema.Model>(props: IAgenticaChatApplicationProps<Model>): JSX.Element {
  return (
    <div className="agentica-chat-movie">
      <div className="agentica-chat-movie__container">
        <div className="agentica-chat-movie__container__header">
          <div className="agentica-chat-movie__container__header__title">
            <h1>Agentica Chat</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
