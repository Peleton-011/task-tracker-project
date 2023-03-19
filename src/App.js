import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

import AddTask from "./components/AddTask";

function App() {

    const [showAddTask, setShowAddTask] = useState(false);

    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: "Do the dishes",
            date: "Feb 4th at 12pm",
            reminder: true,
        },
        {
            id: 2,
            name: "Do the laundry",
            date: "Mar 7th at 2am",
            reminder: false,
        },
        {
            id: 3,
            name: "Do ur mom",
            date: "Apr 20th at 4:20pm",
            reminder: true,
        },
    ]);

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
            {showAddTask && <AddTask onAdd={addTask} />}
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
