import Vue from 'vue';
import List from './components/list.vue';

window.axios = require('axios');

new Vue({
    el: '#app',
    components: {
        //
    },
    mounted: function() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response => this.posts = response.data)
        .catch(error => this.posts = [{title: 'No comments found.'}]) // if api fails you can catch the error
        .finally(() => console.log('Data loading complete.')); // it will always run

    },
    data: {
        posts: null
    }
});
