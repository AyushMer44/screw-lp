import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config
export default defineConfig({
  base: "/", // Set base path if hosted in a subdirectory
  plugins: [react()],
  build: {
    outDir: "dist", // Output directory for build files
  },
  publicDir: "public", // Static assets folder
});
