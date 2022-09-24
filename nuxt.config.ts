export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
  },
  experimental: { reactivityTransform: true },

  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
  ],
  unocss: { preflight: true },
  googleFonts: {
    families: {
      Roboto: true,
    },
  },
})
