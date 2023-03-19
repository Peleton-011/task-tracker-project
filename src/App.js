import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

import AddTask from "./components/AddTask";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Do the dishes",
            day: "Feb 4th at 12pm",
            reminder: true,
        },
        {
            id: 2,
            text: "Do the laundry",
            day: "Mar 7th at 2am",
            reminder: false,
        },
        {
            id: 3,
            text: "Do ur mom",
            day: "Apr 20th at 4:20pm",
            reminder: true,
        },
    ]);

    //Add Task
    const addTask = (task) => {
        console.log(task)
    }

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
            <Header title="Task Tracker" />
            <AddTask onAdd={addTask}/>
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
