<template>
    <div>
        <p v-text="dropdownResult"></p>

        <dropdown @update:option="optionUpdate"></dropdown>
    </div>
    
</template>

<script>
    import Dropdown from './dropdown';
    export default {
        name: "List",
        components: {
            Dropdown,
        },
        data: function() {
            return {
                dropdownResult: ''
            }
        },
        methods: {
            optionUpdate: function(value) {
                this.dropdownResult = value;

            }
        }
    }
</script>

<style scoped>

</style>