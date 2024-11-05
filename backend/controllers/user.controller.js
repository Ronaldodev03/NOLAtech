import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password");

    const employeeCount = users.filter(
      (user) => user.role === "Employee"
    ).length;
    const managerCount = users.filter((user) => user.role === "Manager").length;
    const adminCount = users.filter((user) => user.role === "Admin").length;

    const employees = users.filter((user) => user.role === "Employee");
    const managers = users.filter((user) => user.role === "Manager");
    const admins = users.filter((user) => user.role === "Admin");

    const response = {
      totalUsers: users.length,
      counts: {
        employees: employeeCount,
        managers: managerCount,
        admins: adminCount,
      },
      details: {
        allUsers: users,
        employees,
        managers,
        admins,
      },
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
};
