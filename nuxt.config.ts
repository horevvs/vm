// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@primevue/nuxt-module', '@pinia/nuxt', '@nuxt/ui'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  plugins: [
    '~/plugins/primevue.js'
  ],
  primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
}
})