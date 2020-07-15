<template>
  <div id="user-form">
    <form @submit.prevent="handleSubmit">
      <label>Users name: </label>
      <input type="text" ref="first" :class="{ 'has-error': submitting && invalidName }" v-model="user.name" @focus="clearStatus" @keypress="clearStatus" />
      <label>Users Todo: </label>
      <input :class="{ 'has-error': submitting && invalidTodo }" v-model="user.todo" @focus="clearStatus" type="text" />
      <p v-if="error && submitting" class="error-message">Please fill out all required fields</p>
      <p v-if="success" class="success-message">Todo successfully added</p>
      <button>Add Todo</button>
    </form>
  </div>    
</template>

<script>
export default {
    name: 'user-form',
    data() {
        return {
            submitting: false,
            error: false,
            success: false,
            user: {
                name: '',
                todo: '',
            },
        }
    },
    methods: {
        handleSubmit() {
            this.submitting = true
            this.clearStatus()
            if (this.invalidName || this.invalidTodo) {
                this.error = true
                return
            }
            this.$emit('add:user', this.user);
            this.$refs.first.focus()
            this.user = {
                name: '',
                todo: '',
            }
            this.error = false
            this.success = true
            this.submitting = false
        },
        clearStatus() {
            this.success = false
            this.error = false
        }
    },
    computed: {
        invalidName() {
            return this.user.name === ''
        },

        invalidTodo() {
            return this.user.todo === ''
        },
    }
}
</script>

<style scoped>
    form {
        margin-bottom: 2rem;
    }

    [class*='-message'] {
        font-weight: 500;
    }

    .error-message {
        color: #d33c40;
    }

    .success-message {
        color: #32a95d;
    }
</style>