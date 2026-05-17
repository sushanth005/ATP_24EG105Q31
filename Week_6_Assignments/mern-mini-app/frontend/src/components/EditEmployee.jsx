import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiEndpoints } from "../config/apiConfig";

function EditEmployee() {
  const {
    register,
    handleSubmit,
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const { state } = useLocation();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Save modified employee
  const saveModifiedEmp = async (modifiedEmp) => {
    try {
      setLoading(true);
      setError("");

      // make HTTP PUT request
      const res = await axios.put(
        `${apiEndpoints.employees}/${state._id}`,
        modifiedEmp,
        {
          withCredentials: true,
        }
      );

      // success
      if (res.status === 200) {
        navigate("/list");
      }

    } catch (err) {
      console.log("Error updating employee:", err);

      setError(
        err.response?.data?.error ||
        err.response?.data?.message ||
        err.message ||
        "Something went wrong"
      );

    } finally {
      setLoading(false);
    }
  };

  // Prefill form values
  useEffect(() => {
    if (state) {
      setValue("name", state.name);
      setValue("email", state.email);
      setValue("mobile", state.mobile);
      setValue("designation", state.designation);
      setValue("companyName", state.companyName);
    }
  }, [state, setValue]);

  // loading state
  if (loading) {
    return (
      <p className="text-center text-4xl text-white mt-10">
        Updating...
      </p>
    );
  }

  // error state
  if (error) {
    return (
      <p className="text-center text-red-500 text-2xl mt-10">
        {error}
      </p>
    );
  }

  return (
    <div className="app-container min-h-screen flex flex-col justify-center">
      <h1 className="text-4xl text-white font-bold text-center mb-6">
        Edit Employee
      </h1>

      <div className="max-w-lg mx-auto bg-white/90 p-6 rounded-2xl shadow-lg w-full">
        <form onSubmit={handleSubmit(saveModifiedEmp)}>

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
              className="mt-2 px-6 py-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition"
            >
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default EditEmployee;
