// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      api: process.env.API_MAIN,
      apiAddress: process.env.API_ADDRESS,
      apiAuthentication: process.env.API_AUTHENTICATION,
    },
  },

  postcss: { plugins: { tailwindcss: "./tailwind.config.js" } },
  css: [
    "~/assets/css/main.css",
  ],

  components: [
    { path: "~/components", extensions: ["vue"] },
    { path: "~/components/icons", extensions: ["vue"] },
  ],
});
