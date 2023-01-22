import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
  {
    id: { type: Number },
    name: { type: String },
    email: { type: String },
  },
  { versionKey: false }
);

const teachers = mongoose.model("teachers", TeacherSchema);

export default teachers;
