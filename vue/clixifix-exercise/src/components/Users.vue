<template>
    <div id="users">
        <v-row>
            <v-col cols="3">
                <!-- display a message on the screen if there are no users -->
                <p v-if="users.length < 1" class="empty-table">No Users</p>
            </v-col>
            <v-col cols="6">
                <v-list subheader>
                    <v-subheader>Users</v-subheader>
                    <!-- loop through users to display them in a list -->
                    <template v-for="(user, index) in users">
                        <v-list-item
                        :key="index">                            
                            <v-list-item-content>
                                <v-list-item-title v-text="user.name" @click="showTasks(user)"></v-list-item-title>
                                <!-- <v-btn @click="showTasks(user)">Show To do's</v-btn> -->
                            </v-list-item-content>
                        </v-list-item>
                    </template>                    
                    </v-list>
                    <!-- this will show the todo's in a dialog box once a user has been clicked -->
                    <v-dialog v-model="showTodos">
                          <v-card>
                            <v-card-title>{{ selectedUser.name }}</v-card-title>
                            <!-- only show the todos for selctedUser -->
                            <v-card-text><user-todo v-if="showTodos" :user="selectedUser" /></v-card-text>
                        </v-card>
                    </v-dialog>
            </v-col>
        </v-row>
    </div>
    
</template>

<script>
import axios from 'axios';
import UserTodo from './UserTodo.vue';

export default {
    name: 'users',
    components: {
        UserTodo // we need to import todos
    },
    data() {
        return {
            selectedId: null,
            users: [],
            showTodos: false,
            selectedUser: {}
        }
    },
    methods: {
        showTasks(user) {
            this.selectedUser = user
            this.showTodos = true
        }

    },
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => this.users = response.data);
    },
}
</script>

<style scoped>
    button {
        margin: 0 0.5rem 0 0;
    }
</style>