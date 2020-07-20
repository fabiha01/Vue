<template>
    <div id="todos-list">
        <v-content>
            <v-list subheader>
                <!-- loop through the todos and track the index -->
                <v-subheader>Todos</v-subheader>
                <template v-for="(todo, index) in todos">
                    <v-list-item
                    :key="index">
                    <v-list-item-content>
                    <v-list-item-title><v-text-field v-text="todo.title"></v-text-field></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action><v-btn>Edit</v-btn></v-list-item-action>
                    <!-- remove a selcted todo - so only the one you want -->
                    <v-list-item-action><v-btn @click="removeTodo(index)">Delete</v-btn></v-list-item-action>
                    </v-list-item>
                </template>
            </v-list>
        </v-content>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: {
        userId: {
            type: Number,
            required: false
        },
        user: {
            type: Object, // we need the user in order to get the todos
            required: true
        }
    },
    data() {
        return {
            todos: [],
        }
    },
    methods: {
        getUserTodo() {
        // get the todo's of the user - using the user.id
        axios.get("https://jsonplaceholder.typicode.com/users/" + this.user.id + "/todos")
        .then(response => {
            this.todos = response.data
            });
        },
        removeTodo: function(index){
        this.todos.splice(index, 1); // splice from the index only 1 todo
        }
    },
    mounted() {
        this.getUserTodo()
    },
    watch: {
        userId(newValue) {
        this.getUserTodo(newValue)
        },
    }
    
}
</script>

<style scoped>

</style>