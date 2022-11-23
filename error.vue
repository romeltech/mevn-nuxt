<template>
    <div>
        <div>
            {{ error.statusCode }}
        </div>
        <div>
            {{ error.message }}
        </div>
    </div>
</template>

<script setup>
defineProps(['error'])

</script>