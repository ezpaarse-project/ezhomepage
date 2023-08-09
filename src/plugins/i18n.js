import { createI18n } from "vue-i18n";
import messages from '@intlify/unplugin-vue-i18n/messages'

export default createI18n({
  locale: (import.meta.env.VITE_DEFAULT_LOCALE || 'EN').toLowerCase(), 
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  messages
})