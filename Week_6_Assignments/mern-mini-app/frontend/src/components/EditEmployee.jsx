import { useLocation } from "react-router";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";
import { useState } from "react";
import { useContext } from "react";
import { counterContextObj } from "../contexts/ContextProvider";

function EditEmployee() {

    const {
        register, //to register form fields
        handleSubmit, //to handle for submissions
        formState:{errors},
        setValue //to handle validators
      }=useForm();

      //read state(empObj) recieved in navigation hook
    const {state} = useLocation();
    //console.log(state)

    const {counter,changeCounter}=useContext(counterContextObj);
    //console.log(counter);

    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const navigate=useNavigate();


    useEffect(()=>{
      if(state)
      {
        setValue("name",state.name);
        setValue("email",state.email);
        setValue("mobile",state.mobile);
        setValue("designation",state.designation);
        setValue("companyName",state.companyName);
      }
    },[])

    const saveModifiedEmployee=(async(modifiedEmployee)=>{
      try
      {
        setLoading(true);
        //make HTTP Post Req
        console.log(modifiedEmployee)
        //make HTTP PUT Req
        const res=await axios.put(`http://localhost:6002/emp-api/employees/${state._id}`,modifiedEmployee);

        if(res.status===200)
        {
          //naviagate to ListOfEmps
          navigate("/list");
        }
        else
        {
          let errorRes=await res.json();
          console.log(errorRes);
          throw new Error(errorRes);
        }
      }catch(error)
      {
        console.log("Error is: ",error)
        setError(error);
      }
      finally
      {
        setLoading(false);
      }
    })

  return (
    <div>

      <h1 className="text-4xl">Counter: {counter}</h1>
      <button onClick={changeCounter} className="bg-amber-300 p-5">
        Change
      </button>

      <h1 className="text-5xl text-center text-gray-700">Edit Employee Details:</h1>
        {/* form */}
        <form className="max-w-md mx-auto mt-10 text-1xl" onSubmit={handleSubmit(saveModifiedEmployee)}>
            <input type="text" 
            placeholder="Enter Name" 
            {...register("name")} 
            className="mb-3 border p-3 w-full rounded-2xl"/>

            <input type="email" 
            placeholder="Enter Email" 
            {...register("email")} 
            className="mb-3 border p-3 w-full rounded-2xl"
            disabled
            />

            <input type="number" 
            placeholder="Enter Number" 
            {...register("mobile")} 
            className="mb-3 border p-3 w-full rounded-2xl"/>

            <input type="text" 
            placeholder="Enter Designation" 
            {...register("designation")} 
            className="mb-3 border p-3 w-full rounded-2xl"/>

            <input type="text" 
            placeholder="Enter Company Name" 
            {...register("companyName")} 
            className="mb-3 border p-3 w-full rounded-2xl"/>

            <button type="submit" className="bg-gray-800 text-gray-300 p-4 block mx-auto">
                Save
            </button>
          </form>
    </div>
  )
}

export default EditEmployee