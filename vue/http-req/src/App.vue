<template>
  <div id="app">
    <input type="text">
    <users my-name="Fabiha"/>
    <grid-table></grid-table>
  </div>
</template>

<script>
import Users from './components/UsersList.vue'
import GridTable from './components/GridTable'

export default {
  name: 'App',
  components: {
    Users,
    GridTable
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
