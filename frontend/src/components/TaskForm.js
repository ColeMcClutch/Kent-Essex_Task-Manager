import { useState } from "react"; //import usestate for release
import { createTask } from "../api/tasks"; //import createTask
import "./TaskForm.css"; // Import CSS for styling

//Handling for task creation
const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");

  //Action for when the 'Add Task button is added'
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await createTask(title);
    setTitle("");
    onTaskAdded();
  };

  //Creates 'Add Task' button
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
