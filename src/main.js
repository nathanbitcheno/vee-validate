import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { ValidationProvider, extend } from 'vee-validate'
import { ValidationObserver } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

Vue.config.productionTip = false

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

// Vee validate email rule
extend('email', {
  ...email,
  message: 'This email address is not valid'
})
// Vee Validate required rule
extend('required', {
  ...required,
  message: 'This field is required'
})

new Vue({
  router,
  ValidationProvider,
  ValidationObserver,
  render: h => h(App)
}).$mount('#app')
