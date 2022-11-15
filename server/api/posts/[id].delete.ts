import PostModel from "~~/server/models/Post.model";

export default defineEventHandler(async (event) => {

  // id from the params
  const id = event.context.params.id;

  // remove Post
  try {
    await PostModel.findByIdAndDelete(id);
    return { message: "Post removed successfully" };
  } catch (e) {
    throw createError({
      //   message: e.message,
      message: "Error while updating Post",
    });
  }
});
