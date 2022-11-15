import PostModel from "~~/server/models/Post.model";
import { PostSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
  // get data from body
  const body = await useBody(event);

  // id from the params
  const id = event.context.params.id;

  // validate
  let { error } = PostSchema.validate(body, {
    abortEarly: true,
    allowUnknown: true,
  });
  if (error) {
    throw createError({
      message: error.message.replace(/"/g, ""),
      statusCode: 400,
      fatal: false,
    });
  }

  // update Post
  try {
    await PostModel.findByIdAndUpdate(id, body);
    return { message: "Post updated successfully" };
  } catch (e) {
    throw createError({
      //   message: e.message,
      message: "Error while updating Post",
    });
  }
});
