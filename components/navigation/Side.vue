<template>
    <v-navigation-drawer v-model="drawer">
        <v-sheet color="grey-lighten-4" class="pa-4">
            <v-avatar class="mb-4" color="grey-darken-1" size="64"></v-avatar>
            <div>john@vuetifyjs.com</div>
        </v-sheet>
        <v-divider></v-divider>
        <v-list>
            <v-list-item v-for="nav in navigation" link :to="nav.location" nuxt>
                <template v-slot:prepend>
                    <v-icon>{{ nav.icon }}</v-icon>
                </template>
                <v-list-item-title>{{ nav.text }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
const drawer = ref(true)
const navigation = ref([
    {
        location: "/",
        text: "Home",
        icon: "mdi-home",
    },
    {
        location: "/about",
        text: "About",
        icon: "mdi-pencil",
    },
    {
        location: "/products",
        text: "Products",
        icon: "mdi-package-variant-closed",
    },
    {
        location: "/admin/posts",
        text: "Posts",
        icon: "mdi-pencil",
    },
    {
        location: "/admin/users",
        text: "Users",
        icon: "mdi-account-group",
    }
]);
</script>