import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld';
import Tasks from './components/Tasks.vue';
import User from './components/User.vue';
import NotFound from './components/NotFound.vue'

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/tasks', component: Tasks },
    { path: '/user/:id', component: User },
    { path: '*', component: NotFound }
  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
