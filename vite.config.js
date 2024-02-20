import dotenv from "dotenv";
dotenv.config();

import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vitePluginImp from "vite-plugin-imp";

const { PORT = 3007, API_PORT = 3008 } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    modules: {
      generateScopedName: "[name]__[local]__[hash:base64:5]",
      hashPrefix: "prefix",
      localsConvention: "camelCase" | "camelCaseOnly",
    },
    // preprocessorOptions: {
    //   less: {
    //     javascriptEnabled: true,
    //   },
    // },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  server: {
    port: PORT,
    proxy: {
      "/api": {
        target: `http://localhost:${API_PORT}`,
        changeOrigin: true,
      },
    },
  },
});
