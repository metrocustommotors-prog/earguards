import { defineConfig } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    // Route pre-rendering runs the Workers bundle in Node. That bundle imports
    // `cloudflare:workers`, which Node cannot load, so prerender is left off.
    // The Worker renders pages on request instead.
    vinext(),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
});
