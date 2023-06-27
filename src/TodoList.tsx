import { useState } from "react";
import { Checkbox, Text, Input, Flex, Button, List, Title } from "@mantine/core";
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
            <Title size="h1">Todo List</Title>
            <form onSubmit={handleSubmit}>
                <Flex direction={{ base: "column", sm: "row" }} gap={{ base: "sm", sm: "lg" }}>
                    <Input
                        styles={{ input: { maxWidth: 300 } }}
                        value={task}
                        placeholder="Add New Task"
                        onChange={handleNewTask}
                    />
                    <Button w={100} type="submit">
                        Add
                    </Button>
                </Flex>
            </form>

            <List mt="xl" listStyleType="none" spacing="xl">
                {todos.map((todo, index) => (
                    <List.Item key={index}>
                        <Flex direction={{ base: "column", sm: "row" }} gap={{ base: "sm", sm: "lg" }} align="center">
                            <Checkbox checked={todo.isCompleted} onChange={() => handleUpdateTask(index)}></Checkbox>
                            <Text td={todo.isCompleted ? "line-through" : "none"} align="center">
                                {todo.task}
                            </Text>
                            <IconTrash
                                size="1.2rem"
                                onClick={() => handleRemoveTask(index)}
                                style={{ cursor: "pointer" }}
                            ></IconTrash>
                        </Flex>
                    </List.Item>
                ))}
            </List>
        </div>
    );
}

export default TodoList;
