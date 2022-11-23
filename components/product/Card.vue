<template>
    <div class="card">
        <div class="card-image">
            <v-img :src="product.image" :alt="product.title" style="width: 100%; height: auto;"></v-img>
        </div>
        <div class="card-title">{{ product.title }}</div>
        <v-btn color="primary" :to="`/products/${product.id}`">
            View Details
        </v-btn>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
.card {
    width: 100%;
    max-width: 300px;
    background: white;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 1em;
    text-align: center;
}

.card .card-image {
    max-width: 80%;
    margin: 0 auto;
}

.card .card-title {
    font-size: 20px;
    color: rgb(0, 47, 47);
    margin-bottom: 15px;
}

.btn {
    background: teal;
    color: white;
    border-radius: 4px;
    transition: .1s ease-out;
    padding: 15px 20px;
    display: inline-block;
    text-decoration: none;
}

.btn:hover {
    background-color: rgb(2, 155, 155);
}
</style>