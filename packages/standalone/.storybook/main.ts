import type { StorybookConfig } from "@storybook/react-vite";
import UnpluginTypia from "@ryoppippi/unplugin-typia/vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  framework: "@storybook/react-vite",
  viteFinal: async (config) => {
    config.plugins = (config.plugins ?? []).filter((plugin) => plugin && plugin.name !== "unplugin-typia");
    config.plugins?.push(UnpluginTypia({ tsconfig: "./tsconfig.json", "enforce": "post"}));
    console.log(JSON.stringify(config.plugins, null, 2));
    return config;
  },
};

export default config;
