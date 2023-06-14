import React, { useState } from "react";
import "./Todo.css";

function Todo() {
    const [todos, setTodos] = useState([]);

    const [task, setTask] = useState("");

    const handleClick = () => {
        console.log(task);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <input
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                ></input>
                <button onClick={handleClick}>add</button>
            </div>
            <ul></ul>
        </div>
    );
}

export default Todo;
