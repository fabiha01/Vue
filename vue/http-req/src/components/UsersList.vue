<template>
  <div class="hello">
    <ul v-for="user in users" v-bind:key="user.id">
      <li @click="clickHandler(user.id)">{{user.name}}</li>
      <button v-on:click="clickHandler(user.id)">{{ user.name }}</button>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
window.axios = require('axios');

export default {
  name: 'Users',
  data () {
    return {
      users: '',
    }
  },
  mounted () {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => this.users = response.data);
  },
  methods: {
      clickHandler: function(userID) {
        axios.get("https://jsonplaceholder.typicode.com/users/" + userID + "/todos")
        .then(response => console.log(response.data));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
