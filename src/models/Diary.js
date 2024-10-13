import mongoose from "mongoose";

const diarySchema = new mongoose.Schema({
  title: { type: String, required: true, default: "No Title" },
  content: { type: String, required: true, default: "No Content" },
  Date: { type: Date, required: true, default: Date.now },
});

const Diary = mongoose.model("Diary", diarySchema);
export default Diary;
