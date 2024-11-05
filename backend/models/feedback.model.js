import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  evaluation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Evaluation",
  },
  feedback: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
export default Feedback;
