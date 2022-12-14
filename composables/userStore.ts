import { defineStore } from "pinia";
import { IUser } from "../types";
// import useToast from "./useToast";

export const useUserstore = defineStore("user-store", {
	state: () => ({
		users: [] as IUser[],
	}),
	actions: {
		// Get all users from DB
		async getAll() {
			try {
				let data = await $fetch<IUser[]>("/api/users");
				this.users = data;
				return data as IUser[];
			} catch (e) {
				// useToast().error(e.message);
			}
		},
		// Create a new author
		async create(fullname: string) {
			await $fetch("/api/users/create", {
				method: "POST",
				body: { fullname },
			})
				.catch((e) => {
					// useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					// useToast().success("Author created");
				});
		},
		// Update an author
		async update(id: string, fullname: string) {
			await $fetch(`/api/users/${id}`, {
				method: "PUT",
				body: { fullname },
			})
				.catch((e) => {
					// useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					// useToast().success("Author updated");
				});
		},
		// delete an author
		async remove(id: string) {
			await $fetch(`/api/users/${id}`, {
				method: "DELETE",
			})
				.catch((e) => {
					// useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					// useToast().success("Author removed");
				});
		},
	},
});