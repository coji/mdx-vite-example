import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [{ enforce: "pre", ...mdx() }, react(), tsConfigPaths()],
});
