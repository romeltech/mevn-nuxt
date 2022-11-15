import { defineStore } from "pinia";
import { IPost } from "../types";
// import useToast from "./useToast";

export const usePoststore = defineStore("post-store", {
  state: () => ({
    posts: [] as IPost[],
  }),
  actions: {
    // Get all posts from DB
    async getAll() {
      try {
        let data = await $fetch<IPost[]>("/api/posts");
        this.posts = data;
        // console.log("this.posts has been fetched");
        return data as IPost[];
      } catch (e) {
        // useToast().error(e.message);
      }
    },
    // Create a new Post
    async create(data: IPost[]) {
		console.log("data", data);
		
      await $fetch("/api/posts/create", {
        method: "POST",
        body: data,
      })
        .catch((e) => {
          console.log("Create post error", e.data.message);
          // useToast().error(e.data.message);
        })
        .then(async () => {
          await this.getAll();
          console.log("Post created successfully");
          // useToast().success("Post created");
        });
    },
    // Update an Post
    async update(id: string, title: string) {
      await $fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: { title },
      })
        .catch((e) => {
          // useToast().error(e.data.message);
        })
        .then(async () => {
          await this.getAll();
          // useToast().success("Post updated");
        });
    },
    // delete an Post
    async remove(id: string) {
      await $fetch(`/api/posts/${id}`, {
        method: "DELETE",
      })
        .catch((e) => {
          // useToast().error(e.data.message);
        })
        .then(async () => {
          await this.getAll();
          // useToast().success("Post removed");
        });
    },
  },
});
