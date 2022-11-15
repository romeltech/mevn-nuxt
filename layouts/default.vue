<template>
    <v-app id="inspire">
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
        <v-main>  
            <slot />
        </v-main>
    </v-app>
</template>
  
<script>
export default {
    data: () => ({
        cards: ['Today', 'Yesterday'],
        drawer: null,
        navigation: [
            {
                location: "/",
                text: "Home",
                icon: "mdi-home"
            },
            {
                location: "/about",
                text: "About",
                icon: "mdi-pencil"
            },
            {
                location: "/products",
                text: "Products",
                icon: "mdi-package-variant-closed"
            },
            {
                location: "/admin/posts",
                text: "Posts",
                icon: "mdi-pencil"
            }
        ],
    }),
}
</script>

<!-- <template>
    <div class="m-container">
        <header>
            <Logo />
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Products</NuxtLink>
                </li>
            </ul>
        </header>
        <div>
            <slot />
        </div>
    </div>
</template> -->
