import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage";


const registerOrderService = async (storage: Storage) => {
    const response = await StorageModel.create(storage);

    return response;
};

export {
    registerOrderService
}