import Vue from 'vue';
import App from './App.vue';
import i18n from './plugins/i18n';
import vuetify from './plugins/vuetify';
import './assets/sass/style.scss';

Vue.config.productionTip = false;

new Vue({
  i18n,
  vuetify,
  render(h) { return h(App); },
}).$mount('#app');
