import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiEndpoints } from "../config/apiConfig";

function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  // form submit
  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      setError("");

      // make HTTP POST request
      const res = await fetch(apiEndpoints.employees, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(newEmpObj),
      });

      // success
      if (res.ok) {
        reset();
        navigate("/list");
      } else {
        // backend error
        const errorRes = await res.json();

        console.log("error response is", errorRes);

        throw new Error(
          errorRes.error ||
          errorRes.message ||
          "Something went wrong"
        );
      }
    } catch (err) {
      console.log("Error in catch:", err);

      // handle error
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // loading state
  if (loading) {
    return (
      <p className="text-center text-4xl mt-10 text-white">
        Loading...
      </p>
    );
  }

  // error state
  if (error) {
    return (
      <p className="text-red-500 text-center text-2xl mt-10">
        {error}
      </p>
    );
  }

  return (
    <div className="app-container min-h-screen flex flex-col justify-center">
      <h1 className="text-4xl text-center text-white font-bold mb-6">
        Create New Employee
      </h1>

      <div className="max-w-lg mx-auto bg-white/90 p-6 rounded-2xl shadow-lg w-full">
        <form onSubmit={handleSubmit(onFormSubmit)}>
          
          <input
            type="text"
            placeholder="Enter name"
            {...register("name", { required: true })}
            className="mb-3 border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />

          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", { required: true })}
            className="mb-3 border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />

          <input
            type="number"
            placeholder="Enter mobile number"
            {...register("mobile", { required: true })}
            className="mb-3 border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />

          <input
            type="text"
            placeholder="Enter designation"
            {...register("designation", { required: true })}
            className="mb-3 border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />

          <input
            type="text"
            placeholder="Enter company name"
            {...register("companyName", { required: true })}
            className="mb-4 border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />

          <div className="text-center">
            <button
              type="submit"
              className="mt-2 btn-primary w-40"
            >
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEmp;
