import Evaluation from "../models/evaluation.model.js";

export const createEvaluation = async (req, res) => {
  const { employee, evaluator, score, comments } = req.body;

  try {
    const evaluation = new Evaluation({ employee, evaluator, score, comments });
    await evaluation.save();
    res.status(201).json(evaluation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getEmployeeEvaluations = async (req, res) => {
  try {
    const evaluations = await Evaluation.find({
      employee: req.params.id,
    }).populate("evaluator", "-password");

    // Calcular el puntaje promedio
    const totalScore = evaluations.reduce((acc, ev) => acc + ev.score, 0);
    const averageScore =
      evaluations.length > 0 ? totalScore / evaluations.length : 0; // Manejar el caso de sin evaluaciones

    res.json({ evaluations, averageScore });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getEvaluationById = async (req, res) => {
  try {
    const evaluation = await Evaluation.findById(req.params.id);

    if (!evaluation) {
      return res.status(404).json({ message: "Evaluation not found" });
    }

    res.json(evaluation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEvaluation = async (req, res) => {
  const { score, comments } = req.body;

  try {
    const evaluation = await Evaluation.findById(req.params.id);

    if (!evaluation) {
      return res.status(404).json({ message: "Evaluation not found" });
    }

    // Actualizar solo los campos que fueron proporcionados
    if (score !== undefined) evaluation.score = score;
    if (comments !== undefined) evaluation.comments = comments;

    await evaluation.save();
    res.json(evaluation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
