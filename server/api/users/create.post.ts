import UserModel from "~~/server/models/Post.model";
import { UserSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  // validate
  let { error } = UserSchema.validate(body);
  if (error) {
    throw createError({
      message: error.message.replace(/"/g, ""),
      statusCode: 400,
      fatal: false,
    });
  }

  // create User
  try {
    await UserModel.create(body);
    return { message: "User created successfully" };
  } catch (e) {
    throw createError({
      //   message: e.message,
      message: "Error while creating User",
    });
  }
});
