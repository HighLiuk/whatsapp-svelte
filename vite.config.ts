import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
  build: {
    lib: {
      entry: "src/App.svelte",
      name: "WhatsappPhone",
      formats: ["umd"],
      fileName: () => "whatsapp-phone.js",
    },
  },
});
