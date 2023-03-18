import Header from "./components/Header";
import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState([{}]);
    return (
        <div className="container">
            <Header title="Task Tracker" />
        </div>
    );
}

export default App;
