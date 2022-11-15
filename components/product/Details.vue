<template>
    <div>
        <div class="product-wrapper">
            <div class="product-image">
                <img :src="`${product.image}`" :alt="product.title">
            </div>
            <div class="product-details">
                <div class="title">{{ product.title }}</div>
                <div class="price">Price - ${{ product.price }}</div>
                <div>Description</div>
                <hr>
                <div class="description">{{ product.description }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
.product-wrapper {
    display: flex;
    background: white;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);
    padding: 12px;
    border-radius: 8px;
}

.product-wrapper .product-image {
    width: 40%;
    padding: 12px;
}

.product-wrapper .product-image img {
    width: 100%;
    height: auto;
}

.product-wrapper .product-details {
    width: 60%;
    padding: 12px;
}

.product-wrapper .product-details .title {
    font-size: 3em;
    margin-bottom: 15px;
}

.product-wrapper .product-details .price {
    font-size: 2em;
    margin-bottom: 15px;
}

.product-wrapper .product-details .description {
    font-size: 1em;
    margin-bottom: 15px;
}
</style>