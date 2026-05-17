import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiEndpoints } from "../config/apiConfig";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Navigate to employee details
  const gotoEmployee = (empObj) => {
    navigate("/employee", { state: empObj });
  };

  // Navigate to edit employee
  const gotoEditEmployee = (empObj) => {
    navigate("/edit-emp", { state: empObj });
  };

  // Delete employee
  const deleteEmpById = async (id) => {
    try {
      setLoading(true);

      const res = await fetch(
        `${apiEndpoints.employees}/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (res.ok) {
        // Refresh employee list
        getEmps();
      } else {
        const errorRes = await res.json();

        throw new Error(
          errorRes.error ||
          errorRes.message ||
          "Failed to delete employee"
        );
      }

    } catch (err) {
      console.log("Delete Error:", err);

      setError(err.message);

    } finally {
      setLoading(false);
    }
  };

  // Get all employees
  async function getEmps() {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        apiEndpoints.employees,
        {
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        const resObj = res.data;

        setEmps(resObj.payload || []);
      }

    } catch (err) {
      console.log("Fetch Error:", err);

      setError(
        err.response?.data?.error ||
        err.response?.data?.message ||
        err.message ||
        "Failed to fetch employees"
      );

    } finally {
      setLoading(false);
    }
  }

  // Fetch employees on mount
  useEffect(() => {
    getEmps();
  }, []);

  // Loading state
  if (loading) {
    return (
      <p className="text-center text-4xl text-white mt-10">
        Loading...
      </p>
    );
  }

  // Error state
  if (error) {
    return (
      <p className="text-center text-red-500 text-2xl mt-10">
        {error}
      </p>
    );
  }

  return (
    <div className="min-h-screen p-6">

      {/* Heading */}
      <h1 className="text-4xl text-center text-white font-bold mb-10">
        List of Employees
      </h1>

      {/* Empty State */}
      {emps.length === 0 ? (
        <p className="text-center text-2xl text-white">
          No employees found
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {emps.map((empObj) => (
            <div
              key={empObj._id}
              className="bg-yellow-200 pt-8 pb-8 px-6 rounded-3xl shadow-lg text-center flex flex-col items-center gap-4 overflow-hidden min-h-[18rem]"
            >

              {/* Avatar */}
              <div className="w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center text-2xl font-bold text-white shadow-md">
                {(empObj.name || "")
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase()}
              </div>

              {/* Email */}
              <p className="text-sm text-gray-600 break-words text-center">
                {empObj.email}
              </p>

              {/* Name */}
              <p className="text-lg font-semibold text-gray-800">
                {empObj.name}
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-2 flex-wrap justify-center">

                <button
                  onClick={() => gotoEmployee(empObj)}
                  className="bg-green-500 text-white px-3 py-2 text-sm rounded-full shadow-sm hover:bg-green-600 transition"
                >
                  View
                </button>

                <button
                  onClick={() => gotoEditEmployee(empObj)}
                  className="bg-yellow-400 text-black px-3 py-2 text-sm rounded-full shadow-sm hover:bg-yellow-500 transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteEmpById(empObj._id)}
                  className="bg-red-500 text-white px-3 py-2 text-sm rounded-full shadow-sm hover:bg-red-600 transition"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListOfEmps;
