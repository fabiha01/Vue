<template>
  <div id="app">
    <input type="text">
    <users my-name="Fabiha"/>
  </div>
</template>

<script>
import Users from './components/UsersList.vue'

export default {
  name: 'App',
  components: {
    Users
  },
  data() {
    return {
      id: '',
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
