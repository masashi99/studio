import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from '@tailwindcss/vite';
import {tanstackRouter} from "@tanstack/router-plugin/vite";


export default defineConfig({
  plugins: [cloudflare(), tailwindcss(), tanstackRouter({target: "react", autoCodeSplitting: true, routesDirectory: "src/app/routes", generatedRouteTree: "src/app/routeTree.gen.ts"}), react()],
});
