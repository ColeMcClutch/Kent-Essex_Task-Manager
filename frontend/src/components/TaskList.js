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

  const groupedTasks = {
    pending: tasks.filter((task) => task.status === "pending"),
    inProgress: tasks.filter((task) => task.status === "in-progress"),
    completed: tasks.filter((task) => task.status === "completed"),
  };

  return (
    <div className="task-container">
      <div className="task-column">
        <h2>Pending</h2>
        {groupedTasks.pending.map((task) => (
          <TaskItem key={task._id} task={task} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </div>
      <div className="task-column">
        <h2>In Progress</h2>
        {groupedTasks.inProgress.map((task) => (
          <TaskItem key={task._id} task={task} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </div>
      <div className="task-column">
        <h2>Completed</h2>
        {groupedTasks.completed.map((task) => (
          <TaskItem key={task._id} task={task} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
