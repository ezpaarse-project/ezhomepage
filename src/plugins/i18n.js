import { createI18n } from "vue-i18n";
import messages from '@intlify/unplugin-vue-i18n/messages'

function getBrowserLocale() {
  const navigatorLang = navigator.languages ? navigator.languages[0] : navigator.language
  console.log(navigatorLang);
  return navigatorLang ? navigatorLang.split('-')[0].toLowerCase() : null
}

const locale = getBrowserLocale()

export default createI18n({
  locale, 
  fallbackLocale: 'en',
  legacy: false,
  messages
})