import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "src",
  publicDir: "../public",
  plugins: [react()],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
    alias: {
      "@app": "/app",
      "@pages": "/pages",
      "@widgets": "/widgets",
      "@features": "/features",
      "@entities": "/entities",
      "@shared": "/shared",
      "@assets": "/shared/assets"
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
    sourcemap: true
  },
});
