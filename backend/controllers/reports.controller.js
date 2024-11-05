import User from "../models/user.model.js";
import Evaluation from "../models/evaluation.model.js";

export const generateEmployeeReport = async (req, res) => {
  try {
    const employeeId = req.params.id;

    const employee = await User.findById(employeeId);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    if (employee.role !== "Employee") {
      return res.status(403).json({ message: "User is not an employee" });
    }

    const evaluations = await Evaluation.find({ employee: employeeId })
      .populate("employee", "name email")
      .populate({
        path: "feedback",
        select: "feedback date",
        strictPopulate: false,
      });

    if (evaluations.length === 0) {
      return res
        .status(404)
        .json({ message: "No evaluations found for this employee" });
    }

    const report = {
      employee: {
        id: employee._id,
        name: employee.name,
        email: employee.email,
      },
      evaluations: evaluations.map((evaluation) => ({
        id: evaluation._id,
        score: evaluation.score,
        comments: evaluation.comments,
        date: evaluation.date,
        feedback: evaluation.feedback || [],
      })),
    };

    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: "Error generating report", error });
  }
};
