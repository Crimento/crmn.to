// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  devtools: { enabled: true },
  modules: [
    "nuxt-purgecss",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    "nuxt-particles",
  ],
  colorMode: {
    preference: "mytheme",
    dataValue: "theme",
  },
  particles: {
    mode: "custom",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
