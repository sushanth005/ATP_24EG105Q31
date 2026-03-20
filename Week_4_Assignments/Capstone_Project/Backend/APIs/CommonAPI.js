import exp from "express";
export const commonApp = exp.Router();
import { UserModel } from "../models/UserModel.js";
import { hash, compare } from "bcryptjs";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middlewares/verifyToken.js"
const { sign } = jwt;

config();

//Route for register
commonApp.post("/users", async (req, res) => {
  let allowedRoles = ["USER", "AUTHOR"];
  //get user from req
  const newUser = req.body;
  //check role
  if (!allowedRoles.includes(newUser.role)) {
    return res.status(400).json({ message: "Invalid role" });
  }
  //run validators manually

  //hash password and replace plain with hashed one
  newUser.password = await hash(newUser.password, 12);
  //create New user document
  const newUserDoc = new UserModel(newUser);
  //save document
  await newUserDoc.save();
  //send res
  res.status(201).json({ message: "User created" });
});

//Route for Login(USER, AUTHOR and ADMIN)
commonApp.post("/login", async (req, res) => {
  //console.log(req.body)
  //get user cred obj
  const { email, password } = req.body;
  //find user by email
  const user = await UserModel.findOne({ email: email });
  //if use not found
  if (!user) {
    return res.status(400).json({ message: "Invalid email" });
  }
  //compare password
  const isMatched = await compare(password, user.password);
  //if passwords not matched
  if (!isMatched) {
    return res.status(400).json({ message: "Invalid password" });
  }
  //create jwt
  const signedToken = sign({id:user._id, email: email, role: user.role }, process.env.SECRET_KEY, { expiresIn: "1h" });

  //set token to res header as httpOnly cookie
  res.cookie("token", signedToken, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
  //remove password from user document
  let userObj = user.toObject();
  delete userObj.password;

  //send res
  res.status(200).json({ message: "login success", payload: userObj });
});

//Route for Logout
commonApp.get("/logout",  (req, res) => {
  //delete token from cookie storage
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
  //send res
  res.status(200).json({message:"Logout success"})
});

// change password
commonApp.put("/password", verifyToken("USER", "AUTHOR", "ADMIN"), async(req,res)=>{
  //check current password and new password are same
  const {oldPassword, newPassword, id}= req.body
  if(oldPassword === newPassword){
    return res.status(400).json({message:"Old password and new password must not be same"});
  }
  //get current password of user/admin/author
  const userDoc = userDoc.findOne({_id:id, isUserActive:true});
  if(!userDoc){
    return res.status(400).json({message:"User not found"});
  }
   
  //check the current password of req and user are not same
  
  //hash the new password
  const newpass = await hash(npass, 12);
  //replace current password of user with hashed password
  userDoc.password = newpass;
  //save
  userDoc.save()
  //send res
  return res.status(200).json({message:"Password changed successfully"});
});