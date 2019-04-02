<template>
    <v-toolbar>
        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
        <v-toolbar-title>Single App</v-toolbar-title>
        <v-spacer></v-spacer>


        <div class="hidden-sm-and-down">
            <v-btn flat>Forum</v-btn>
            <v-btn flat>Ask question</v-btn>
            <v-btn flat>Catégory</v-btn>
            <router-link to="/login">
                <v-btn flat>Login</v-btn>
            </router-link>
        </div>

    </v-toolbar>
</template>

<script>
    export default {

    }
</script>
