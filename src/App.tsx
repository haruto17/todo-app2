import "./App.css";
import { MantineProvider } from "@mantine/core";
import TodoList from "./TodoList";

function App() {
    return (
        <div className="todolist">
            <MantineProvider theme={{ colorScheme: "dark" }} withGlobalStyles withNormalizeCSS>
                <div>
                    <TodoList />
                </div>
            </MantineProvider>
        </div>
    );
}

export default App;
