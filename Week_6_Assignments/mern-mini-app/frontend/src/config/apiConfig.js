// API Configuration for frontend
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://backend-q31-week-6.onrender.com";

export const apiEndpoints = {
  employees: `${API_BASE_URL}/emp-api/employees`,
};

export default API_BASE_URL;
