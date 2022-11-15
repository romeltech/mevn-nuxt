import UserModel from "~~/server/models/User.model";

export default defineEventHandler(async (event) => {
  return await UserModel.find();
});
