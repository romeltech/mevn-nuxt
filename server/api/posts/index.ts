import PostModel from "~~/server/models/Post.model";

export default defineEventHandler(async (event) => {
  // console.log("New request: " + event.req.url);
  // return [{ title: "mel" }];
  // return await PostModel.find().populate('authors');
  return await PostModel.find();
});
