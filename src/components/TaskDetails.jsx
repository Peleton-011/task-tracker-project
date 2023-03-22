import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"

import Button from "./Button";

function TaskDetails() {
    const [loading, setLoading] = useState(true);
    const [task, setTask] = useState({});
    const [error, setError] = useState(null);

    const params = useParams();
    const nav = useNavigate();

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
            const data = await res.json();

            if (res.status === 404) {
                nav("/");
            }

            setTask(data);
            setLoading(false);
        }

        fetchTask();
    });

    return loading ? (
        <h3>Loading...</h3>
    ) : (
        <div>
            <h3>{task.name}</h3>
            <p>{task.date}</p>
            <Button onClick={() => {
                //Go back
                nav(-1)
            }} text="Go Back" />
        </div>
    )
}

export default TaskDetails;
