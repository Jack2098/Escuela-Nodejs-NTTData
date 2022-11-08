import { model, Schema } from "mongoose"; 
import { Car } from "../interfaces/car.interface";


const ItemSchema = new Schema<Car>(
    {
        color: {
            type: String,
            require: true
        },
        modelCar: {
            type: String,
            require: true
        },
        fuel: {
            type: String,
            enum: ['gasoline', 'electric', 'diesel', 'alcohol']
        },
        year: {
            type: Number,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const ItemModel = model('items', ItemSchema);

export default ItemModel;
