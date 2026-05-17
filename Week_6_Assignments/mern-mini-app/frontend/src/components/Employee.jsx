import { useLocation, useNavigate } from "react-router-dom";

function Employee() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // If no employee data exists
  if (!state) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <h2 className="text-3xl font-semibold text-white">
          No employee selected
        </h2>

        <p className="mt-4 text-gray-200 text-center">
          Go back and select an employee to view details.
        </p>

        <button
          onClick={() => navigate("/list")}
          className="mt-6 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-lg text-black font-medium transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Generate initials
  const initials = state.name
    ? state.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "EE";

  return (
    <div className="app-container min-h-screen p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <h1 className="text-4xl font-extrabold text-white">
          Employee Details
        </h1>

        <button
          onClick={() => navigate("/list")}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm transition"
        >
          ← Back
        </button>
      </div>

      {/* Employee Card */}
      <div className="bg-yellow-200 rounded-3xl shadow-2xl p-8 flex flex-col sm:flex-row gap-6 items-center">

        {/* Avatar Section */}
        <div className="flex-shrink-0 text-center">
          <div className="w-28 h-28 rounded-full bg-yellow-400 flex items-center justify-center text-4xl font-bold text-white shadow-md">
            {initials}
          </div>

          <p className="text-sm text-gray-700 mt-3">
            Employee ID:
          </p>

          <p className="font-mono text-xs break-all text-gray-800">
            {state._id || "—"}
          </p>
        </div>

        {/* Details Section */}
        <div className="flex-1 w-full">

          <h2 className="text-3xl font-bold text-gray-800">
            {state.name}
          </h2>

          <p className="text-sm text-gray-600 mt-1">
            {state.designation} at{" "}
            <span className="font-semibold text-gray-800">
              {state.companyName}
            </span>
          </p>

          {/* Info Cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Email */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-xs text-gray-400 mb-1">
                Email
              </p>

              <p className="text-base font-medium text-gray-800 break-words">
                {state.email || "N/A"}
              </p>
            </div>

            {/* Mobile */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-xs text-gray-400 mb-1">
                Mobile
              </p>

              <p className="text-base font-medium text-gray-800">
                {state.mobile || "N/A"}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">

            <button
              onClick={() =>
                navigate("/edit-emp", { state })
              }
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition"
            >
              Edit
            </button>

            <button
              onClick={() => navigate("/list")}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition"
            >
              Back to List
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
