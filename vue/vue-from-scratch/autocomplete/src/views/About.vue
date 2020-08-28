<template>
  <div class="about">
    <input type="text" class="bg-gray-300 px-4 py-2" autocomplete="off" v-model="state" @input="filterStates">
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        state: '',
        states: [
          'Florida', 'Alabama', 'Alaska', 'Texas'
        ],
        filteredStates: []
      }
      
    },
    methods: {
      filterStates() {
        this.filteredStates = this.states.filter(state => {
          return state.toLowerCase().startsWith(this.state.toLowerCase());
        });
      }
    }
  }
</script>
