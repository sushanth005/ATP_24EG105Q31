import { Schema, model } from "mongoose";

//Define the schema of the product pehle
const productSchema = new Schema({
    productId:{
        type:Number,
        required:[true, "ID is mandatory"],
        unique:[true, "ID already existed"]
    },
    productName:{
        type:String,
        required:[true, "Name must be between 4-12"],
        minLength:[4, "Min length of the product Name is 4"],
        maxLength:[12, 'Max length of the product Name is 12']
    },
    price:{
        type:Number,
        required:[true, "Price must be mentioned"],
        min:[10000, "min price is 10000"],
        max:[50000, "max price is 50000"]
    },
    brand:{
        type:String,
        required:[true, "brand must be menyioned"]
    }
},{
        versionKey:false,
        timestamps:true
    }
);
export const ProductModel = model("product", productSchema);