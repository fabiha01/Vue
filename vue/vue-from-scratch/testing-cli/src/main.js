import Vue from 'vue'
import App from './App.vue';
import tasks from './components/tasks.vue';
import HelloWorld from './components/HelloWorld';
import NotFound from './components/notfound.vue';

Vue.config.productionTip = false

const routes = {
'/': App,
'/test' : tasks,
'/hello': HelloWorld,
};

new Vue({
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    currentComponent() {
      return routes[this.currentRoute] || NotFound;
    }
  },
  render: function(h) {
    return h(this.currentComponent)
  },
}).$mount('#app')
