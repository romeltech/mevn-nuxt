import mongoose from "mongoose";

export default async () => {
  // run your connections here
  const config = useRuntimeConfig();

  // specify the database
  const connectionOptions = {
      dbName: 'groundup',
      useUnifiedTopology: true,
  }

  // connect to mongodb
  mongoose
    .connect(config.MONGO_URI, connectionOptions)
    .then(() => console.log(`Conntected to DB`))
    .catch((e) => console.log(e));
};