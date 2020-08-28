import Vue from 'vue'
import axios from 'axios';

window.axios = require('axios');

new Vue({
  el: '#app',
  components: {
    //
  },
  mounted: function(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => this.users = response.data);
  },
  data: {
    users: null
    //
  }
});
