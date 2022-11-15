import mongoose from "mongoose";

export default async () => {
  // run your connections here
  const config = useRuntimeConfig();

  // connect to mongodb
  mongoose
    .connect(config.MONGO_URI)
    .then(() => console.log(`Conntected to DB`))
    .catch((e) => console.log(e));
};
