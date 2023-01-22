import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

mongoose.connect(
  `mongodb+srv://emersonteles:${process.env.MONGOPASS}@lectures.kj7zzpv.mongodb.net/node-lectures`
);
mongoose.set("strictQuery", true);
let db = mongoose.connection;

export default db;
