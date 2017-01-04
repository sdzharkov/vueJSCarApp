// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
// import VueGoogleMaps from 'vue2-google-maps'

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})

// Vue.use(VueGoogleMaps, {
//   installComponents: true,
//   load: {
//     key: 'AIzaSyBMSi1KFmkp-dto-D_21QPPkDvfaeE7l0w'
//   }
// })

// new Vue({
//   el: '#transition-components-demo',
//   data: {
//     view: 'v-a'
//   },
//   components: {
//     'v-a': {
//       template: '<div>Component A</div>'
//     },
//     'v-b': {
//       template: '<div>Component B</div>'
//     }
//   }
// })

// import Vue from 'vue'
// import App from './App'
// // import * as VueGoogleMaps from '../node_modules/vue2-google-maps/dist/main.js'
// import * as VueGoogleMaps from 'vue2-google-maps'

// Vue.use(VueGoogleMaps, {
//   installComponents: true,
//   load: {
//     key: 'AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw',
//   }
// })

// // json filter is now not bundled with vue
// Vue.filter('json', x => JSON.stringify(x))

// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
