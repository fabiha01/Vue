<template>
    <v-app>
        <h1 class="subheading">Dashboard</h1>

        <v-container class="my-5">
            <v-card flat outlined class="pa-3">
                <v-layout row wrap>
                    <v-flex xs12 md6>
                        <div class="caption">Project Title</div>
                        <div>Create a new website</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption">Person</div>
                        <div>The Net Ninja</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption">Due By</div>
                        <div>1st Jan 2020</div>
                    </v-flex>
                    <v-flex xs2 sm4 md2>
                        <div class="caption">Status</div>
                        <div>Ongoing</div>
                    </v-flex>
                </v-layout>
            </v-card>

        </v-container>
    </v-app>
</template>

<script>
export default {
    name: 'GridTable'
    
}
</script>