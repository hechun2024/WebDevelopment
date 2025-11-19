const User = require("../models/userModel");

const getAllUsers = (req, res) => {
  try {
    const users = User.getAll();
    return res.status(200).json({ results: users.length, data: { users } });
  } catch (err) {
    console.error("getAllUsers error:", err);
    return res
      .status(500)
      .json({ message: "Fail to get users", error: err.message });
  }
};

const getUserById = (req, res) => {
  try {
    const user = User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.status(200).json(user);
  } catch (err) {
    console.error("getUserById error:", err);
    return res
      .status(500)
      .json({ message: "Fail to get user", error: err.message });
  }
};

const createUser = (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone_number,
      gender,
      date_of_birth,
      membership_status,
      account_verified,
      country,
    } = req.body;

    if (!name || !email || !password || !phone_number || !country) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newUser = User.addOne(
      name,
      email,
      password,
      phone_number,
      gender,
      date_of_birth,
      membership_status,
      account_verified,
      country
    );

    if (!newUser) return res.status(400).json({ message: "Invalid user data" });

    return res.status(201).json(newUser);
  } catch (err) {
    console.error("createUser error:", err);
    return res
      .status(500)
      .json({ message: "Fail to create user", error: err.message });
  }
};

const updateUser = (req, res) => {
  try {
    const updated = User.updateOneById(req.params.userId, req.body);
    if (!updated) return res.status(404).json({ message: "User not found" });
    return res.status(200).json(updated);
  } catch (err) {
    console.error("updateUser error:", err);
    return res
      .status(500)
      .json({ message: "Fail to update user", error: err.message });
  }
};

const deleteUser = (req, res) => {
  try {
    const ok = User.deleteOneById(req.params.userId);
    if (!ok) return res.status(404).json({ message: "User not found" });
    return res.status(204).send();
  } catch (err) {
    console.error("deleteUser error:", err);
    return res
      .status(500)
      .json({ message: "Fail to delete user", error: err.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
