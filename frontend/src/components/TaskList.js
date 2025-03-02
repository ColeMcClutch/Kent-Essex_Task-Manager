import { useEffect, useState } from "react"; //import react elements
import { getTasks, deleteTask, updateTask } from "../api/tasks"; //import api tasks methods
import TaskItem from "./TaskItem"; //import the task item
import "./TaskList.css"; // Ensure styles are applied

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  //use effect
  useEffect(() => {
    fetchTasks();
  }, []);

  //Call on fetch tasks method
  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      console.log("✅ Fetched tasks:", data);
      setTasks(data);
    } catch (error) {
      console.error("❌ Error fetching tasks:", error);
    }
  };

  //handle updates to the page
  const handleUpdate = async (id, status) => {
    await updateTask(id, status);
    fetchTasks();
  };

  //handle deleting of task and re-fetch
  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  //visual elements
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
