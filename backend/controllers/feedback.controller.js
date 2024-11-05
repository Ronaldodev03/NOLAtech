import Feedback from "../models/feedback.model.js";
import Evaluation from "../models/evaluation.model.js";

export const createFeedback = async (req, res) => {
  try {
    const { evaluation, feedback } = req.body;

    // Verificar si la evaluación existe
    const evaluationExists = await Evaluation.findById(evaluation);
    if (!evaluationExists) {
      return res.status(404).json({ message: "Evaluation not found" });
    }

    // Crear el feedback
    const newFeedback = new Feedback({
      evaluation,
      feedback,
    });

    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ message: "Error creating feedback", error });
  }
};
