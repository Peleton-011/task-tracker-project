import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

import AddTask from "./components/AddTask";

function App() {

    const [showAddTask, setShowAddTask] = useState(false);

    const [tasks, setTasks] = useState([]);

    //Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) + 1;

        const newTask = {id, ...task};
        setTasks([...tasks, newTask]);
    };

    //Del Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    //Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    return (
        <div className="container">
            <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
            {showAddTask && <AddTask onAdd={addTask} setShowAdd={setShowAddTask} />}
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    setTasks={setTasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
            ) : (
                "No tasks yet..."
            )}
        </div>
    );
}

export default App;
