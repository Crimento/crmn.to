// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
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
    mode: "full",
    lazy: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
