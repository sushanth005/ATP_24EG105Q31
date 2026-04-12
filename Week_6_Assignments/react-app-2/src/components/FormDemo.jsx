import { useForm } from "react-hook-form";

function FormDemo() {
    
    const {
        register, //to register form fields
        handleSubmit, //to handle for submissions
        formState:{errors}} //to handle validators
        =useForm();

    //form submit function
    const onFormSubmit=(formObj)=>{
        console.log(formObj);
    }

    return(
        <div>
            <h1 className="text-center text-5xl">Form Demo</h1>
            {/*Form*/}
            <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
                {/*Username*/}
                <div className="mb-3">
                    <label htmlFor="username">Username</label>
                    <input type="text" {...register("username",
                    {
                        required:"Username required",
                        minLength:4,
                        validate:(v)=>v.trim().length!=0 ||"White Space is not valid"
                    })} 
                    id="username" 
                    className="border w-full p-3"/>
                    {/*usename validation error message}*/}
                    {errors.username?.type==="required" && <p className="text-red-500">{errors.username.message}</p>}
                    {errors.username?.type==="minLength" && <p className="text-red-500">Minimum Length of Username is 4</p>}
                    {errors.username?.type==="validate" && <p className="text-red-500">{errors.username.message}</p>}
                </div>
                {/*Email*/}
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" {...register("email",
                        {
                            required: "Email is Requried",
                            minLength:10
                        })} 
                    id="email" 
                    className="border w-full p-3"/>
                    {errors.email?.type==="required" && <p className="text-red-500">{...errors.email.message}</p>}
                    {errors.email?.type==="minLength" && <p className="text-red-500">Minimum Length of Email is 10</p>}
                </div>
                {/*Submit Button*/}
                <button type="submit" className="bg-amber-400 p-4 block mx-auto">Submit</button>
            </form>
        </div>
    )
}

export default FormDemo;