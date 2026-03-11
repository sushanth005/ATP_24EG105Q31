//create mini express application
import exp from 'express';
import { UserModel } from '../models/UserModel.js';
import { hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { verifyToken } from '../middlewares/verifytoken.js';

const {sign} = jwt;
export const userApp = exp.Router();

//Define USER REST API Routes
    //user login
    userApp.post('/users/auth',async(req, res)=>{
        //get user cred obj from client
        const {email, password} = req.body;
        //verify email
        let user = await UserModel.findOne({email:email});
        
        if(!user){
            return res.status(404).json({message:"Invalid email"});
        }
        //if passwords not matched
        //compare passwords
        let result = await compare(password, user.password);
        if(result===false)
        {
            return res.status(400).json({message:"Invalid password"});
        }
        
        //if passwords are matched 
            //create a token(json web token -jwt -jaat)
            const signedToken = sign({email: user.email}, "abcdef",{expiresIn:"1h"});
            //send token in res
            //store token as httpOnly cookie
            res.cookie("token", signedToken, {
                httpOnly:true,
                sameSite:"lax",
                secure:false
            });
            res.status(200).json({message:"login success", playload:user})
    }) 
    //Generate UserModel
    //create new User
    userApp.post("/users", async(req,res)=>{
        //get new user obj from req
        const newUser = req.body;
        //create new user document
        //Replace plain password with hashed password
        const hashedPassword = await hash(newUser.password, 12);
        newUser.password = hashedPassword;
        //create new user document
        const newUserDocument = new UserModel(newUser);
        //save
        const result= await newUserDocument.save()
        console.log("result: ", result) 
        //send response
        res.status(201).json({message: "User created"});
    });
    //express 5 version handles errors in builtly

    //read all users(protected route)
    userApp.get("/users",verifyToken,async(req, res)=>{
        //read all users from db
        let userslist = await UserModel.find()
        //send res
        res.status(200).json({message:"users", payload: userslist});

    });

    //read a user by object_id
    userApp.get("/users/:id", async(req, res)=>{
        //read object id from req params
        const uid = req.params.id;
        //find user by id
        const userObj = await UserModel.findById(uid);
        //if user not found
        if(!userObj){
            res.status(404).json({message:"User not found"});
            return;
        }
        //send res
        res.status(200).json({message:"user", payload: userObj});
    })

    //update a user by id
    userApp.put("/users/:id", async(req,res)=>{
        const modifiedUser = req.body;
        const uid = req.params.id;
        //find user by id
        const updatedUser = await UserModel.findByIdAndUpdate(
            uid, 
            {$set:{...modifiedUser}}, 
            {new:true, runValidators: true});
        //send res
        res.status(200).json({message: "User Modified", payload: updatedUser});
    })

    //find by id and delete
    userApp.delete("/users/:id", async(req, res)=>{
        const uid = req.params.id;
        //find user by id and delete
        const deleteUser = await UserModel.findByIdAndDelete(uid);
        //if not deleted
        if(!deleteUser){
            return res.status(404).json({message: "User not found"});
        }
        //send res
        res.status(200).json({message:"User Deleted"})
    })

    //      200 --> success
    //      201 --> created
    //      400 --> bad request
    //      401 --> Unauthorized
    //      404 --> Not found
    // All the 4 series status codes represents client-side error
    //      500 --> Server error
    // All 5 series status codes represents server-side error
    
    //app.use(verifyToken) ---> it executes for every request    (application level middlewares)

    //userApp.get(path, verifyToken, req-handler)  (route level middlewares (selected routes only))