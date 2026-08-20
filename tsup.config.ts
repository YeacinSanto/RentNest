import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/server.ts"],
    format: ["esm"], // Prisma's generated client requires import.meta.url, so CJS output is not viable
    target: "esnext",
    outDir: "dist",
    clean: true,
    bundle: true,
    splitting: false,

    sourcemap: true,

    // Shim require() for bundled CJS dependencies (Node has no global require in ESM)
    banner: {
        js: `import { createRequire } from 'module';
        const require = createRequire(import.meta.url);`,
    },

});