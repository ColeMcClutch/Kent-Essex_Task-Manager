const TaskItem = ({ task, onUpdate, onDelete }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p><strong>Status:</strong> {task.status}</p>
      <button onClick={() => onUpdate(task._id, "in-progress")}>In Progress</button>
      <button onClick={() => onUpdate(task._id, "completed")}>Complete</button>
      <button className="delete" onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
