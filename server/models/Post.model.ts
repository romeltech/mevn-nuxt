import mongoose from "mongoose";

const schema: mongoose.Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", schema);
