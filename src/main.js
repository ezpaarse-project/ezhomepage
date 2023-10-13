import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from './plugins/i18n'
import './assets/sass/style.css';


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { md2 } from 'vuetify/blueprints'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  blueprint: md2,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  directives,

})

createApp(App).use(vuetify).use(i18n).mount('#app')
