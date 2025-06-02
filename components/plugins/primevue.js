// plugins/primevue.js
import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'

// Импортируйте необходимые компоненты и стили
import 'primevue/resources/themes/saga-blue/theme.css' // тема
import 'primevue/resources/primevue.min.css' // базовые стили
import 'primeicons/primeicons.css' // иконки

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue)
})




