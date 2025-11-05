const User = require("../models/userModel");

// GET /users
const getAllUsers = (req, res) => {
  const users = User.getAll();
  res.json(users);
};

// POST /users
const createUser = (req, res) => {
  const newUser = User.addOne({ ...req.body }); // Spread the req.body object

  if (newUser) {
    res.json(newUser);
  } else {
    res.status(500).json({ message: "Failed to create new user" });
  }
};

// GET /users/:userId
const getUserById = (req, res) => {
  const userId = req.params.userId;
  const user = User.findById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ Message: "User not found" });
  }
};

// PUT /users/:userId
const updateUser = (req, res) => {
  const userId = req.params.userId;
  const updateUser = User.updateOneById(userId, { ...req.body });

  if (updateUser) {
    res.json(updateUser);
  } else {
    res.status(404).json({ Message: "User not found" });
  }
};

// DELETE /users/:userId
const deleteUser = (req, res) => {
  const userId = req.params.userId;
  const deleteUser = User.deleteOneById(userId, { ...req.body });

  if (deleteUser) {
    res.json(deleteUser);
  } else {
    res.status(404).json({ Message: "User not found" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
