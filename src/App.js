import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState([{}]);
    return (
        <div className="container">
            <Header title="Task Tracker" />
            <Tasks tasks={tasks} setTasks={setTasks} />
        </div>
    );
}

export default App;
