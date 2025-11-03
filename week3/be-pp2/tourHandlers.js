/*{
    "name": "Best of Paris in 7 Days Tour",
    "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
    "image": "https://www.course-api.com/images/tours/tour-1.jpeg",
    "price": "1,995"
}
*/
const Tour = require("./tourLib");

const getAllTours = (req, res) => {
  const tours = Tour.getAll();
  res.json(tours);
};

const createTour = (req, res) => {
  const { name, info, image, price } = req.body;
  const newTour = Tour.addOne(name, info, image, price);
  res.status(201).json(newTour);
};

const getTourById = (req, res) => {
  const id = parseInt(req.params.tourId);
  const tour = Tour.findById(id);
  if (!tour) {
    return res.status(404).json({ message: "Tour not found" });
  }
  res.json(tour);
};

const updateTour = (req, res) => {
  const id = parseInt(req.params.tourId);
  const { name, info, image, price } = req.body;
  const updatedTour = Tour.updateById(id, name, info, image, price);
  if (!updatedTour) {
    return res.status(404).json({ message: "Tour not found" });
  }
  res.json(updatedTour);
};

const deleteTour = (req, res) => {
  const id = parseInt(req.params.tourId);
  const deletedTour = Tour.deleteById(id);
  if (!deletedTour) {
    return res.status(404).json({ message: "Tour not found" });
  }
  res.json({ message: "Tour deleted successfully", tour: deletedTour });
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
