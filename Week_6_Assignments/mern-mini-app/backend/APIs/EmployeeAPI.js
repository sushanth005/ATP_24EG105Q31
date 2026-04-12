import exp from 'express';
import { EmployeeModel } from "../models/EmployeeModel.js";

export const employeeApp=exp.Router();

//1) Create Employee
employeeApp.post("/create-emp",async(req,res)=>{

    //Get New Employee Object from req
    const newEmployee=req.body;
    console.log(req.body);

    //Create a New Employee Document
    const newEmployeeDoc=new EmployeeModel(newEmployee);

    //Save the Document in MongoDB and get the result 
    const result=await newEmployeeDoc.save();

    console.log("Result: ",result);

    //Send res as Employee Created
    res.status(201).json({message: "New Employee Created",payload: newEmployee});
})

//2) Read all Employees
employeeApp.get("/list",async(req,res)=>{

    //Read all Employees from Database
    const employeeList=await EmployeeModel.find();

    //If Employees are not found
    if(employeeList.length===0)
    {
        //Send res as employees not found
        return res.status(404).json({message:"There are no Employees"});
    }

    //Send res as Employees Found and Employees List as Payload
    res.status(200).json({message:"Employees List",payload:employeeList})
})

//3) Edit Employee
employeeApp.put("/employees/:_id",async(req,res)=>{

    //Get Modified Employee and Employee Email from req.body
    const modifiedEmployeeId=req.params._id;
    console.log(modifiedEmployeeId);
    const modifiedEmployee=req.body;
    console.log(modifiedEmployee);

    //Find the Modified Employee by email and update it 
    const updatedEmployee=await EmployeeModel.findByIdAndUpdate(modifiedEmployeeId,{...modifiedEmployee},{new:true, runValidators:true})
    
    //If Updated Employee not found
    if(!updatedEmployee)
    {
        //
        return res.status(404).json({message:`Employee with ${modifiedEmployeeId} not found`});
    }

    res.status(200).json({message:`Employee with ${modifiedEmployeeId} is modified`,payload:updatedEmployee});
})


//4) Delete Employee
employeeApp.delete("/employees/:_id",async(req,res)=>{

    const IdOfDeletedEmployee=req.params?._id;

    const deletedEmployee=await EmployeeModel.findByIdAndDelete(IdOfDeletedEmployee);

    if(!deletedEmployee)
    {
        return res.status(404).json({message:`Employee with ${IdOfDeletedEmployee} not found`});
    }

    res.status(200).json({message:`Employee with ${IdOfDeletedEmployee} is deleted`,payload:deletedEmployee});
})