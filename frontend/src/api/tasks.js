import axios from "axios"; //import axios

const API_URL = "http://localhost:5000/api/tasks"; // Adjust if needed

//getTasks funciton
export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

//create tasks function
export const createTask = async (title) => {
  const response = await axios.post(API_URL, { title });
  return response.data;
};

//updateTasks function
export const updateTask = async (id, status) => {
  const response = await axios.put(`${API_URL}/${id}`, { status });
  return response.data;
};

//deleteTasks function
export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
