<template>
    <v-app id="inspire" class="error-container">
        <v-main>
            <v-container class="fluid">
                <v-row style="min-height: 100vh;">
                    <div class="ma-auto text-center">
                        <div class="text-h1 font-weight-bold">
                            {{ error.statusCode }}
                        </div>
                        <div>
                            {{ error.message }}
                        </div>
                        <!-- <v-btn :to="'/'" class="mt-5" width="100%" color="primary" size="large">HOME</v-btn> -->
                        <v-btn class="mt-5" width="100%" color="primary" size="large" @click="handleClearError">
                            Home
                        </v-btn>
                    </div>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
defineProps(['error'])
const handleClearError = () => clearError({ redirect: '/' })
</script>

<style scoped>
.error-container {
    width: 100%;
    background: rgb(0, 0, 0);
    background-image: linear-gradient(to right top, #9e8626, #ac9229, #bb9f2c, #caab30, #d9b833, #dcbb34, #e0be34, #e3c135, #dcbb33, #d5b531, #ceaf30, #c7a92e);
}
</style>