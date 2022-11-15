import PostModel from "~~/server/models/Post.model";
import { PostSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  // validate
  let { error } = PostSchema.validate(body);
  if (error) {
    throw createError({
      message: error.message.replace(/"/g, ""),
      statusCode: 400,
      fatal: false,
    });
  }

  // create Post
  try {
    await PostModel.create(body);
    return { message: "Post created successfully" };
  } catch (e) {
    throw createError({
      //   message: e.message,
      message: "Error while creating Post",
    });
  }
});
