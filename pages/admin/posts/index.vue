<template>
    <v-container class="py-8 px-6" fluid>
        <v-app-bar title="Posts" class="elevation-1"></v-app-bar>
        <v-row>
            <div class="col-12 col-md-10" v-if="posts">
                <v-card>
                    <v-table>
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
                            <tr v-for="item in posts" :key="item._id">
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

<script setup>
const { data: posts } = await useFetch('http://localhost:3000/api/posts');
</script>