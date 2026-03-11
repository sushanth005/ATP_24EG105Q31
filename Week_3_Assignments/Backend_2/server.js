import exp from 'express';
import {connect} from 'mongoose';
import {userApp} from './API/UserAPI.js';
import { productApp } from './API/ProductAPI.js';
import cookieParser from 'cookie-parser';

const app = exp();
//add body parser
// Middleware for parsing JSON
app.use(exp.json());
app.use(cookieParser());
const port = 3000;
//connect to DB server
//uri-uniform resource address

//forward request to UserApp if path starts with /user-api
app.use("/user-api", userApp);
app.use("/product-api", productApp);

//connect().then().catch()   old method
async function connectDB() {
    try{
        await connect("mongodb://localhost:27017/anuragdb");
        console.log("DB connection success");
        app.listen(port, () => console.log(`Server listening on port ${port}`));
    }
    catch(err){
        console.log("error in DB connection: ", err);
    }
}


connectDB();

//error handling middleware
//error=>{name, message, callstack}
app.use((err, req, res, next)=>{
    console.log(err.name);
    //Validation error
    if(err.name === 'ValidationError'){
        return res.status(400).json({message: 'Error occured', error: err});
    }
    //cast error
    if(err.name === 'CastError'){
        return res.status(400).json({message: 'Error occured', error: err});
    }
    //send server side error
    return res.status(500).json({message: 'Error occured', error: "Server side error"});
});