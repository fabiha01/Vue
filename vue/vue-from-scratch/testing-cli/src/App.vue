<template>
  <div id="app">
    <div :class="classObject">{{ value }}</div>
    <div :style="{ fontSize: (value * 10) + 'px' }">{{ value }}</div>

    <button type="button" @click="value++">+</button>
    <button type="butoon" @click="value--">-</button>
        <button type="button" @click="error = ! error">Error</button>
    <button type="butoon" @click="warning = ! warning">Warning</button>

  </div>
</template>

<script>

export default {
  name: 'App',
  data: function() {
    return { 
      value: 1,
      error: false,
      warning: false
    }
  },
  computed: {
    classObject: function() {
      return {
        'red-error' : this.value > 5,
        'green-error': this.value <= 5, 
        'yellow-warning' : this.warning
      }
      
    }
  }
}
</script>

<style>
body {
  font-size: 40px;
  text-align: center;
  padding-top: 100px;
}

.green-error {
  background-color: darkgreen;
}

.red-error {
  background-color: darkred;
}

.yellow-warning {
  text-decoration: underline;
}
</style>
