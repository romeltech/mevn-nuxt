<template>
    <v-app-bar title="Posts" density="compact" class="elevation-1"></v-app-bar>
    <v-container>
        <v-row>
            <div class="v-col-12 v-col-xl-10 mx-auto" v-if="posts">
                <v-card max-width="100%">
                    <v-table width="100%">
                        <thead>
                            <tr>
                                <th class="text-left">
                                    Title
                                </th>
                                <th class="text-left">
                                    Text
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in posts" :key="index">
                                <td>{{ item.title }}</td>
                                <td>{{ item.text }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>
            </div>
        </v-row>
    </v-container>
</template>


<script setup lang="ts">

// import { usePoststore } from '../../../composables/postStore'
// call post store
const postStore = usePoststore();

// get data data on page load
useAsyncData(async () => await postStore.getAll(), {
    initialCache: false,
});

// await postStore.getAll();
// thePosts.value = postStore
// console.log("thePosts", thePosts.value);

// const posts = ref({})
// get data from api using useFetch
const { data: posts } = await useFetch('/api/posts');


</script>