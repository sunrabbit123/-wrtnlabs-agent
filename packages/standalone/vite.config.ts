import { defineConfig } from "vite";
import UnpluginTypia from "@ryoppippi/unplugin-typia/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    UnpluginTypia({
      tsconfig: "./tsconfig.json",
    }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@agentica/standalone",
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});