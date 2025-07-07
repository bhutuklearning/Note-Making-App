import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL + process.env.DB_NAME);
        console.log("MongoDb Connected.");
    } catch (error) {
        console.log("Database error: ", error);
        process.exit(1); // Exit with 1
    }
}