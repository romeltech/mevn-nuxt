<template>
    <div>

        <Head>
            <Title>Romel Tech | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <v-app-bar :title="product.title" density="compact" class="elevation-1"></v-app-bar>
        <v-container>
            <v-row>
                <div class="v-col-12 v-col-xl-10 mx-auto">
                    <ProductDetails :product="product" />
                </div>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
// definePageMeta({
//     layout: 'products'
// })
const { id } = useRoute().params
const uri = "https://fakestoreapi.com/products/" + id
// fetch the product details
const { data: product } = await useFetch(uri, { key: id })

// handle Error
if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true });
}
</script>