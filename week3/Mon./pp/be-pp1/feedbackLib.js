if (require.main === module) {
  let result = addOne(
    "John Smith",
    "Great session on React components! I found the examples very helpful.",
    4
  );
  console.log(result);
  console.log("getAll called:", getAll());
  console.log("findById called:", findById(1));
  // rest of the tests here
}

let feedbacks = [];
let currentId = 1;

const addOne = (sender, message, rating) => {
  const newFeedback = {
    id: currentId++,
    sender,
    message,
    rating,
  };
  feedbacks.push(newFeedback);
  return newFeedback;
};

const getAll = () => {
  return feedbacks;
};

const findById = (id) => {
  return feedbacks.find((fb) => fb.id === id);
};

const updateById = (id, sender, message, rating) => {
  const feedback = findById(id);
  if (feedback) {
    feedback.sender = sender;
    feedback.message = message;
    feedback.rating = rating;
    return feedback;
  }
  return null;
};

const deleteById = (id) => {
  const index = feedbacks.findIndex((fb) => fb.id === id);
  if (index !== -1) {
    return feedbacks.splice(index, 1)[0];
  }
  return null;
};

module.exports = {
  addOne,
  getAll,
  findById,
  updateById,
  deleteById,
};
