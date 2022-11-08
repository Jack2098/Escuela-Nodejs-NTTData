import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const insertCar = async (car: Car) => {
  const response = await ItemModel.create(car);
  return response;
};

const getCar = async (id: string) => {
  const response = await ItemModel.findById({ _id: id });
  return response;
};

const getCars = async () => {
  const response = await ItemModel.find({});
  return response;
};

const updateCar = async (id: string, car: Car) => {
  const response = await ItemModel.findByIdAndUpdate({ _id: id }, car, {
    new: true,
  });
  return response;
};

const deleteCar = async (id: string) => {
  const response = await ItemModel.deleteOne({ _id: id });
  return response;
};

export { 
    getCar,
    getCars,
    insertCar,
    updateCar,
    deleteCar
};
