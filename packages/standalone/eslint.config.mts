import { wrtnlabs } from "@wrtnlabs/eslint-config";

export default wrtnlabs({
  ignores: ["eslint.config.mts", "lib"],
  typescript: {
    parserOptions: {
      project: "./tsconfig.eslint.json",
    },
  },
});
