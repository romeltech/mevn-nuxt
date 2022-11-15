import UserModel from "~~/server/models/Post.model";

export default defineEventHandler(async (event) => {

  // id from the params
  const id = event.context.params.id;

  // remove User
  try {
    await UserModel.findByIdAndDelete(id);
    return { message: "User removed successfully" };
  } catch (e) {
    throw createError({
      //   message: e.message,
      message: "Error while updating User",
    });
  }
});
