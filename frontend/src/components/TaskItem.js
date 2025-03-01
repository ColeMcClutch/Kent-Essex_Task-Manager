const TaskItem = ({ task, onUpdate, onDelete }) => {
    return (
      <div>
        <h3>{task.title}</h3>
        <p>Status: {task.status}</p>
        <button onClick={() => onUpdate(task._id, "in-progress")}>In Progress</button>
        <button onClick={() => onUpdate(task._id, "completed")}>Complete</button>
        <button onClick={() => onDelete(task._id)}>Delete</button>
      </div>
    );
  };
  
  export default TaskItem;
  