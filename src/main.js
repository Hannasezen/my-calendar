import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

import App from './App.vue';

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  },
  store: {
    state: {
      currentYear: 2018,
      currentMonth: 11
    },
    mutations: {
        setCurrentMonth(state, payload) {
          state.currentMonth = payload;
        }
    }
}
})
