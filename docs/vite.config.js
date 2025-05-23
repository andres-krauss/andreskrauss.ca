// vite.config.js
export default {
  base: './', // 👈 ensures all asset and link paths are relative
  build: {
    outDir: 'docs' // 👈 tells Vite to output your built site into /docs
  }
};
