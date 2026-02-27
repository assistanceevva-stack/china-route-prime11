import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  assetsInclude: ["**/*.MP4", "**/*.PNG", "**/*.mp4"],
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && viteCompression({ algorithm: "gzip", ext: ".gz" }),
    mode === "production" && viteCompression({ algorithm: "brotliCompress", ext: ".br" }),
    injectPreloadPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react-dom") || id.includes("react/")) return "vendor-react";
            if (id.includes("react-router-dom")) return "vendor-router";
            if (id.includes("@tanstack/react-query")) return "vendor-query";
          }
          return undefined;
        },
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
}));

/** Injects preload links for critical assets (font, hero image) into index.html after build. */
function injectPreloadPlugin() {
  let outDir = "dist";
  let heroHref = "";
  let fontHref = "";
  return {
    name: "inject-preload",
    apply: "build",
    configResolved(config) {
      outDir = config.build.outDir;
    },
    generateBundle(_, bundle) {
      for (const [id, output] of Object.entries(bundle)) {
        if (output.type !== "asset") continue;
        const name = (output as { fileName: string }).fileName ?? id;
        if (name.includes("hero-banner")) {
          if (name.endsWith(".webp")) heroHref = "/" + name;
          else if (!heroHref) heroHref = "/" + name;
        } else if (name.includes("BebasNeue")) fontHref = "/" + name;
      }
    },
    writeBundle() {
      const indexPath = path.resolve(process.cwd(), outDir, "index.html");
      if (!fs.existsSync(indexPath) || (!heroHref && !fontHref)) return;
      let html = fs.readFileSync(indexPath, "utf-8");
      const preloads: string[] = [];
      if (fontHref) preloads.push(`<link rel="preload" href="${fontHref}" as="font" type="font/otf" crossorigin>`);
      if (heroHref) preloads.push(`<link rel="preload" href="${heroHref}" as="image" type="${heroHref.endsWith(".webp") ? "image/webp" : "image/png"}">`);
      if (preloads.length) {
        html = html.replace("</head>", `\n    ${preloads.join("\n    ")}\n  </head>`);
        fs.writeFileSync(indexPath, html);
      }
    },
  };
}
