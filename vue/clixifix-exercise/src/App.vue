<template>
  <div id="app" class="small-container">
    <h1>Users</h1>

    <user-form @add:user="addUser" />

    <users :users="users" @delete:user="deleteUser" @edit:users="editUser"></users>
  </div>
</template>

<script>
import Users from './components/Users.vue'
import UserForm from './components/UserForm.vue'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Users,
    UserForm
  },
  data() {
    return {
      users: []
    }
  },
  mounted() {
      axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      this.users = response.data
    })
    
  },
  methods: {
    addUser(user) {
      const lastId = this.users.length > 0 ? this.users[this.users.length - 1].id : 0
      const id = lastId + 1
      const newUser = {... user, id}
      this.users = [...this.users, newUser]
    },
    deleteUser(id) {
      this.users = this.users.filter(
        user => user.id !== id
      )
    },
    editUser(id, updatedUser) {
      this.users = this.users.map(user =>
      user.id === id ? updatedUser : user)
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

button {
  background: #009435;
  border: 1px solid #009435;
  margin-left: 12px;
}

.small-container {
  max-width: 680px;
}
</style>
