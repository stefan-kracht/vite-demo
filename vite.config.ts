import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  if (env.VITE_BASE) {
    console.log("👌 found a base config:", env.VITE_BASE);
  }

  const baseconfig = env.VITE_BASE ? { base: env.VITE_BASE } : {};

  return defineConfig({
    plugins: [react()],
    ...baseconfig,
  });
};
