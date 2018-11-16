import Vue from 'vue';

import store from './store';

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

import App from './App.vue';

//let events = [
//  { description: 'Random event 1', date: moment('2018-11-01', 'YYYY-MM-DD') },
//  { description: 'Random event 2', date: moment('2018-11-15', 'YYYY-MM-DD') },
//  { description: 'Random event 3', date: moment('2018-12-14', 'YYYY-MM-DD') }
//];

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
