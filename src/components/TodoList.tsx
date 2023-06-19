import { useState } from "react";
import { Checkbox } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

function TodoList() {
    const initialState = [
        {
            task: "Learn vue.js",
            isCompleted: false,
        },
        {
            task: "Learn React Hook",
            isCompleted: false,
        },
        {
            task: "Learn Gatsby.js",
            isCompleted: false,
        },
    ];

    const [todos, setTodos] = useState(initialState);

    const [task, setTask] = useState("");

    const handleNewTask = (event: any) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (task === "") {
            return;
        }
        setTodos((todos) => [...todos, { task, isCompleted: false }]);
        setTask("");
    };

    const handleRemoveTask = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const handleUpdateTask = (index: number) => {
        let newTodos = todos.map((todo, todoIndex) => {
            if (todoIndex === index) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        });
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                Add Task :
                <input value={task} placeholder="Add New Task" onChange={handleNewTask} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        style={{
                            textDecoration: todo.isCompleted ? "line-through" : "none",
                        }}
                    >
                        <Checkbox checked={todo.isCompleted} onChange={() => handleUpdateTask(index)}></Checkbox>
                        {todo.task}
                        <IconTrash
                            size="1.2rem"
                            onClick={() => handleRemoveTask(index)}
                            style={{ cursor: "pointer" }}
                        ></IconTrash>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
