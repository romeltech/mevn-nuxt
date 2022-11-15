// https://v3.nuxtjs.org/api/configuration/nuxt.config
// import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "@/assets/css/style.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  // buildDir: '../server/public',
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
  },
  nitro: {
    plugins: ["@/server/db/index.ts"],
  },
  modules: ["@pinia/nuxt"],
});
