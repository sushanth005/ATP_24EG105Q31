import { useForm } from "react-hook-form";
import { useState } from "react";


function CreateUser(){
    const {register,handleSubmit,formState:{errors}}=useForm();
    const [users,setUsers]=useState([]);

    //on form submit
    const onFormSubmit=(newUserObj)=>{
        console.log(newUserObj)
        setUsers([...users,newUserObj])
    }

    console.log("users");

    return(
        <div className="mt-5">
            {/* create User Form */}
            <h1 className="text-5xl text-center">Create User</h1>
            <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
            <div className="mb-3">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" {...register("firstName")} id="fn" className="w-full p-3 border"/>
            </div>

            <div className="mb-3">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" {...register("firstName")} id="fn" className="w-full p-3 border"/>
            </div>

            <div className="mb-3">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" {...register("firstName")} id="fn" className="w-full p-3 border"/>
            </div>
            <button type="submit" className="bg-green-500 text-white">Create User</button>
            </form>

            <table className="mt-5 border mx-auto text-3xl">
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((userObj, index) => (
                            <tr key={index}>
                                <td>{userObj.firstName}</td>
                                <td>{userObj.email}</td>
                                <td>{userObj.dateOfBirth}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CreateUser;