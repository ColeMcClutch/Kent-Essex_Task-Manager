import "./TaskItem.css"; // Import CSS for styling

const TaskItem = ({ task, onUpdate, onDelete }) => {
  return (
    <li className="task-card">
      <h3>{task.title}</h3>
      <p><strong>Status:</strong> {task.status}</p>
      <button className="progress" onClick={() => onUpdate(task._id, "in-progress")}>In Progress</button>
      <button className="complete" onClick={() => onUpdate(task._id, "completed")}>Complete</button>
      <button className="delete" onClick={() => onDelete(task._id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
