import { useEffect, useState } from "react";
import { getTasks, deleteTask, updateTask } from "../api/tasks";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleUpdate = async (id, status) => {
    await updateTask(id, status);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} onUpdate={handleUpdate} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TaskList;
