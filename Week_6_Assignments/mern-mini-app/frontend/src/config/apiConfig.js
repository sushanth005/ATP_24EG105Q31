// API Configuration for frontend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const apiEndpoints = {
  employees: `${API_BASE_URL}/emp-api/employees`,
};

export default API_BASE_URL;
