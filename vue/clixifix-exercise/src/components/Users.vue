<template>
    <div id="users">
        <p v-if="users.length < 1" class="empty-table">No Users</p>
        <table v-else>
            <thead>
                <tr>
                    <th>Users name</th>
                    <th>Tasks</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td v-if="editing === user.id"><input type="text" v-model="user.name"/></td>
                    <td v-else>{{ user.name }}</td>
                    <td><button @click="getUserTodo(user.id)">{{ user.name }}</button></td>
                    <td v-if="editing === user.id">
                        <button @click="editUser(user)">Save</button>
                        <button class="muted-button" @click="editing = null">Cancel</button>
                    </td>
                    <td v-else>
                        <button @click="editMode(user.id)">Edit</button>
                        <button @click="$emit('delete:user', user.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>

<script>
import axios from 'axios';

export default {
    name: 'users',
    props: {
        users: Array
    },
    data() {
        return {
            editing: null
        }
    },
    methods: {
        editMode(id) {
            this.editing = id
        },
        editUser(user) {
            if (user.name === '' || user.todo === '') return
            this.$emit('edit:user', user.id, user)
            this.editing = null
        },
        getUserTodo(userID) {
        axios.get("https://jsonplaceholder.typicode.com/users/" + userID + "/todos")
        .then(response => alert(response.data));
        }
    }
}
</script>

<style scoped>
    button {
        margin: 0 0.5rem 0 0;
    }

</style>