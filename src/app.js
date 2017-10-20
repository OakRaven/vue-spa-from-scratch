import Vue from 'vue'
import AppLayout from './theme/Layout.vue'

Vue.component('app', {
  template: `

  `
})

const app = new Vue({
  ...AppLayout
})

export { app }
