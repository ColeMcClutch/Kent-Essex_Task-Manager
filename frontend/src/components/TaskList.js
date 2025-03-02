import { useEffect, useState } from "react";
import { getTasks, deleteTask, updateTask } from "../api/tasks";
import TaskItem from "./TaskItem";
import "./TaskList.css"; // Ensure styles are applied

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      console.log("✅ Fetched tasks:", data);
      setTasks(data);
    } catch (error) {
      console.error("❌ Error fetching tasks:", error);
    }
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
    <div className="task-container">
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <>
          <h2>Task List</h2>
          <ul className="task-list">
            {tasks.map((task) => (
              <TaskItem key={task._id} task={task} onUpdate={handleUpdate} onDelete={handleDelete} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TaskList;
