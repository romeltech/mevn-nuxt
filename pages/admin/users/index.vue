<template>
  <div>
    <v-app-bar density="compact" class="elevation-1">
      <div class="caption px-3">Users</div>
    </v-app-bar>
    <v-container>
      <v-row>
        <div class="v-col-12 v-col-xl-10 mx-auto py-5" v-if="users">
          <v-btn @click="manageDialog" color="primary" class="mb-3">
            Add User
          </v-btn>
          <v-card max-width="100%">
            <v-card-title>Users</v-card-title>
            <v-table width="100%">
              <thead>
                <tr>
                  <th class="text-left">Username</th>
                  <th class="text-left">Full Name</th>
                  <th class="text-left">Email</th>
                  <th class="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in users" :key="index">
                  <td>{{ item.username }}</td>
                  <td>{{ item.fullname }}</td>
                  <td>{{ item.email }}</td>
                  <td class="text-right">
                    <v-btn @click="editUser(item)">
                      <v-icon color="primary">mdi-pencil</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </div>
      </v-row>

      <v-dialog v-model="dialogUserForm" ref="dialogUserForm" persistent>
        <v-card max-width="600px" width="100%" class="mx-auto">
          <v-card-title class="text-h5"> Add User </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="dialogData.username"
              label="Username"
              variant="outlined"
            ></v-text-field>
            <v-text-field
              v-model="dialogData.fullname"
              label="Full name"
              variant="outlined"
            ></v-text-field>
            <v-text-field
              v-model="dialogData.email"
              label="Email"
              variant="outlined"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              variant="flat"
              color="grey-lighten-4"
              @click="manageDialog"
            >
              Cancel
            </v-btn>
            <v-btn @click="saveUser"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script setup>
// import { UserType } from "../../../types";
// import { usePoststore } from '../../../composables/postStore'

// call post store
const postStore = usePoststore();

// get data data on page load
// useAsyncData(async () => await postStore.getAll(), {
//     initialCache: false,
// });

// await postStore.getAll();
// thePosts.value = postStore
// console.log("thePosts", thePosts.value);

const dialogUserForm = ref(true);
const dialogData = ref({});
// get data from api using useFetch
const { data: users } = await useFetch("/api/users");

// const addUser = await useFetch('/api/users/add');

/**
 * Methods
 */
const manageDialog = () => {
  dialogUserForm.value = !dialogUserForm.value;
};
const addUser = () => {
  dialogData.value = {};
  manageDialog();
};
function editUser(item) {
  console.log("editUser", item);
}
function saveUser() {
  console.log("saveUser");
}
</script>
