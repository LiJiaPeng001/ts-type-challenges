import { defineConfig } from "vite";
import { resolve } from "path";
import TsToHtml from './src/utils/tsToHtml'

export default () => {
  return defineConfig({
    resolve: {
      alias: {
        "~": resolve(__dirname, "./src"),
      },
    },
    plugins: [
      TsToHtml()
    ],
    server: {
      port: 2112,
      host: "0.0.0.0",
    },
  });
};
