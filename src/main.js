import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'


Vue.use(Vuetify)

import User from './helpers/User'
window.User = User
window.EventBus = new Vue();
import router from './Router/router';


new Vue({
  el: '#app',
  router,
  vuetify : new Vuetify(),
  render: h => h(App)
})
