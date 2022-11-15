<template>
    <div class="m-container">
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})
const { id } = useRoute().params
const uri = "https://fakestoreapi.com/products/" + id
// fetch the product details
const { data: product } = await useFetch(uri, { key: id })
</script>