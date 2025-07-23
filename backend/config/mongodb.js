import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = `${process.env.MONGO_URI}/prescripto`;

    if (!process.env.MONGO_URI) {
      throw new Error("❌ MONGO_URI is not defined in your .env file");
    }

    await mongoose.connect(uri); // ✅ No need for options

    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB Connected:", uri);
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB Connection Error:", err);
    });
  } catch (error) {
    console.error(`❌ MongoDB Connection Failed: ${error.message}`);
    process.exit(1); // Exit the process on failure
  }
};

export default connectDB;
