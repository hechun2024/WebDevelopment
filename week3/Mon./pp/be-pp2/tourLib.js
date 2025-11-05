if (require.main === module) {
  let result = addOne(
    "7 Days Tour",
    " Join us for the Best of Helsinki!",
    "https://www.course-api.com/images/tours/tour-x.jpeg",
    "1,495"
  );
  console.log(result);
  console.log("getAll called:", getAll());
  console.log("findById called:", findById(1));
  // rest of the tests here
}

let tours = [];
let currentId = 1;

const addOne = (name, info, image, price) => {
  const newTour = { id: currentId++, name, info, image, price };
  tours.push(newTour);
  return newTour;
};

const getAll = () => {
  return tours;
};

const findById = (id) => {
  return tours.find((tr) => tr.id === id);
};

const updateById = (id, name, infor, image, price) => {
  const tour = findById(id);
  if (tour) {
    tour.name = name;
    tour.info = infor;
    tour.image = image;
    tour.price = price;
    return tour;
  }
  return null;
};

const deleteById = (id) => {
  const index = tours.findIndex((tr) => tr.id === id);
  if (index !== -1) {
    return tours.splice(index, 1)[0];
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
