import Joi from "joi";

// author validation
export const UserSchema = Joi.object({
  full_name: Joi.string().min(3).required(),
  username: Joi.string().min(3).required(),
  password: Joi.string().min(12).required(),
  email: Joi.string().min(6).required(),
});

// post validation
export const PostSchema = Joi.object({
  title: Joi.string().min(3).required(),
  text: Joi.string().min(3).required(),
});
