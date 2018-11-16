import Vue from 'vue';

import store from './store';

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

import App from './App.vue';

let events = __INITIAL_STATE__.map(event => {
  return {
    description: event.description,
    date: moment(event.date)
  }
})

let initialState = Object.assign({}, store.state, { events });
store.replaceState(initialState);

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  },
  store
})
