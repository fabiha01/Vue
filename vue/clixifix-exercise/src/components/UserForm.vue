<template>
  <div id="user-form">
    <form @submit.prevent="handleSubmit">
        <v-row>
        <v-col cols="4">
            <label>Users name: </label>
      <v-text-field outlined type="text" ref="first" :class="{ 'has-error': submitting && invalidName }" v-model="user.name" @focus="clearStatus" @keypress="clearStatus"></v-text-field>
        </v-col>

        <v-col cols="4">
            <br />
        <p v-if="error && submitting" class="error-message">Please fill out all required fields</p>
        <p v-if="success" class="success-message">Todo successfully added</p>
        <v-btn>Add User</v-btn>
        </v-col>
        </v-row>

      
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