import { defineConfig } from "vite";
import MillionLint from "@million/lint";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),MillionLint.vite()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
