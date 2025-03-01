import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks"; // Adjust if needed

export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTask = async (title) => {
  const response = await axios.post(API_URL, { title });
  return response.data;
};

export const updateTask = async (id, status) => {
  const response = await axios.put(`${API_URL}/${id}`, { status });
  return response.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
