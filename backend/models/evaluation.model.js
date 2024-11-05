import mongoose from "mongoose";

const evaluationSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  evaluator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  score: {
    type: Number,
    required: true,
    min: [0, "Score must be at least 0"],
    max: [5, "Score cannot exceed 5"],
  },
  comments: {
    type: String,
    trim: true,
  },
});

const Evaluation = mongoose.model("Evaluation", evaluationSchema);
export default Evaluation;
