<template>
  <v-app>
    <v-content>
    <h1>Users</h1>

    <user-form />

    <users :users="users" v-on:user-id="setSelectedId"></users>

    </v-content>
  </v-app>
</template>

<script>
import Users from './components/Users.vue'
import UserForm from './components/UserForm.vue'

export default {
  name: 'App',

  components: {
    Users,
    UserForm,
  },

  data () {
    return {
      users: [],
      selectedId: null
    }

  },
  methods: {
    setSelectedId(id) {
      this.selectedId = id

    }
  }
};
</script>
