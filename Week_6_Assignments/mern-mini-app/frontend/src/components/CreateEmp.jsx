import { useForm } from "react-hook-form";
import { useState,useContext} from 'react';
import { useNavigate } from "react-router";
import { counterContextObj } from "../contexts/ContextProvider";


function CreateEmp() {

    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const navigate=useNavigate();

    const {counter,changeCounter}=useContext(counterContextObj);
    //console.log(counter);

    const {
        register, //to register form fields
        handleSubmit, //to handle for submissions
        formState:{errors}} //to handle validators
        =useForm();

    const onFormSubmit=async(newEmployeeObj)=>{
        //console.log(newEmployeeObj);
        try
        {
            setLoading(true);
            //make HTTP Post Req
            let res=await fetch("http://localhost:6002/emp-api/create-emp",
            {
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(newEmployeeObj),
            });

            if(res.status===201)
            {
                //naviagate to employess component programmatically
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
    };

    if(loading===true){
        return <p className="text-center text-5xl">Loading....</p>
    }
    if(error!=null)
    {
        return <p className="text-center text-red-500 text-5xl">Reason:{error.message}</p>
    }

  return (
    <div>

    <h1 className="text-4xl">Counter: {counter}</h1>
      <button onClick={changeCounter} className="bg-amber-300 p-5">
        Change
      </button>

        <h1 className="text-5xl text-center text-gray-700">Create New Employee</h1>
        {/*  */}
        <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
            <input type="text" 
            placeholder="Enter Name" 
            {...register("name")} 
            className="mb-3 border p-3 w-full rounded-2xl"/>

            <input type="email" 
            placeholder="Enter Email" 
            {...register("email")} 
            className="mb-3 border p-3 w-full rounded-2xl"/>

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
                Create Emp
            </button>
        </form>
    </div>
  )
}

export default CreateEmp