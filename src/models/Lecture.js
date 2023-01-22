import mongoose, { Schema } from "mongoose";

const lectureSchema = new Schema({
  id: { type: String },
  lecture: { type: String, required: true },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "teachers", required: true },
  campus: { type: String, required: true },
  credits: { type: Number, required: true },
});

const lectures = mongoose.model("lectures", lectureSchema);

export default lectures;
