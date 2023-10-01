import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    throw new Error("Connection Failed");
  }
};

export default connectDb;
