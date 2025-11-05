const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
  const feedbacks = Feedback.getAll();
  res.json(feedbacks);
};

const createFeedback = (req, res) => {
  const { sender, message, rating } = req.body;
  const newFeedback = Feedback.addOne(sender, message, rating);
  res.status(201).json(newFeedback);
};

const getFeedbackById = (req, res) => {
  const id = parseInt(req.params.feedbackId);
  const feedback = Feedback.findById(id);
  if (feedback) {
    res.json(feedback);
  } else {
    res.status(404).json({ message: "Feedback not found" });
  }
};

const updateFeedback = (req, res) => {
  const id = parseInt(req.params.feedbackId);
  const { sender, message, rating } = req.body;
  const updatedFeedback = Feedback.updateById(id, sender, message, rating);
  if (!updatedFeedback) {
    res.status(404).json({ message: "Feedback not found" });
  }
  res.json(updatedFeedback);
};

const deleteFeedback = (req, res) => {
  const id = parseInt(req.params.feedbackId);
  const deletedFeedback = Feedback.deleteById(id);
  if (!deletedFeedback) {
    res.status(404).json({ message: "Feedback not found" });
  } else {
    res.json(deletedFeedback);
  }
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};
