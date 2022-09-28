const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  lintOnSave: false,

  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'fr',
      localeDir: 'locales',
      enableInSFC: true,
      includeLocales: false,
      enableBridge: true,
    },
  },

  transpileDependencies: [
    'vuetify',
  ],
});
