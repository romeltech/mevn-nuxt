<template>
    <v-app-bar title="Products" density="compact" class="elevation-1"></v-app-bar>
    <v-container>
        <v-row>
            <div class="v-col-12 v-col-xl-10 mx-auto">
                <div class="products-wrapper">
                    <div v-for="p in products">
                        <ProductCard :product="p" />
                    </div>
                </div>
            </div>
        </v-row>
    </v-container>
</template>
<script setup>
// definePageMeta({
//     layout: 'products'
// })
const { data: products } = await useFetch('https://fakestoreapi.com/products');
</script>

<style scoped>
.products-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1em;
}
</style>