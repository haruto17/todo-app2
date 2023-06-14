import React, { useState } from "react";
import "./Todo.css";

function Todo() {
    const [todos, setTodos] = useState([] as string[]);

    const [task, setTask] = useState("");

    const handleClick = () => {
        if (task.length === 0) {
            return;
        }
        setTodos([...todos, task]);
        setTask("");
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
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
