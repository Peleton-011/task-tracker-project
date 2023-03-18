import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

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
      }
    
    ]);

    //Del Task
    const deleteTask = (id) => {
      console.log("del", id);
    }

    return (
        <div className="container">
            <Header title="Task Tracker" />
            <Tasks tasks={tasks} setTasks={setTasks} onDelete={deleteTask}/>
        </div>
    );
}

export default App;
