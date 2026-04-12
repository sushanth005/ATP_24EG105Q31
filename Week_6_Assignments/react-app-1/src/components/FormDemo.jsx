import { useForm } from "react-hook-form";
import { useState } from "react";

function FormDemo(){

    const {
        register, //to register form fields
        handleSubmit, //to handle for submissions
        formState:{errors}} //to handle validators
        =useForm();

    const [users,setUsers]=useState([]);

    const onFormSubmit=(formObj)=>{
        console.log(formObj);
        setUsers([...users,formObj]);
    }

    return(
        <div>
            <div>
                <h2 className="text-center text-4xl">Create User Form:</h2>
                <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" {...register("firstName")} 
                        id="firstName" 
                        className="border w-full p-3"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">Email:</label>
                        <input type="email" {...register("email")} 
                        id="email" 
                        className="border w-full p-3"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="dateOfBirth">Email:</label>
                        <input type="date" {...register("dateOfBirth")} 
                        id="dateOfBirth" 
                        className="border w-full p-3"/>
                    </div>
                    <button type="submit" className="bg-amber-400 p-4 block mx-auto">Submit</button>
                </form>
            </div>
            <div>
                <table className="border m-5">
                    <thead >
                        <tr className="">
                            <th className="p-5 m-5 border">firstName</th>
                            <th className="p-5 m-5 border">email</th>
                            <th className="p-5 m-5 border">dateOfBirth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((userObj)=>{
                                <tr>
                                    <td>{userObj.firstName}</td>
                                    <td>{userObj.email}</td>
                                    <td>{userObj.dateOfBirth}</td>
                                </tr>
                            })
                        }
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default FormDemo;