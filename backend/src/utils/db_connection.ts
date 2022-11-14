import mongoose from "mongoose";
import dotEnv from "dotenv";
dotEnv.config();
const database = process.env.dburl as string;

export default mongoose.connect(database);
