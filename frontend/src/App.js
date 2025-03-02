//imports to other codes
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

//App functions
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <TaskForm onTaskAdded={() => window.location.reload()} />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
