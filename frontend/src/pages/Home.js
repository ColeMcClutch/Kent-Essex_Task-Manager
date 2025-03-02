//Import Tasklist and Task Form
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

//Home menu set-up
const Home = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onTaskAdded={() => window.location.reload()} />
      <TaskList />
    </div>
  );
};

export default Home;
