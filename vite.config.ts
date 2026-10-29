import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const econverseProxy = {
  "/api/econverse": {
    target: "https://app.econverse.com.br",
    changeOrigin: true,
    secure: true,
    rewrite: (path: string) => path.replace(/^\/api\/econverse/, ""),
  },
};

export default defineConfig({
  plugins: [react()],
  server: { proxy: econverseProxy },
  preview: { proxy: econverseProxy },
});