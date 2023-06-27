import { MantineProvider } from "@mantine/core";
import TodoList from "./TodoList";

function App() {
    return (
        <MantineProvider theme={{ colorScheme: "dark" }} withGlobalStyles withNormalizeCSS>
            <TodoList />
        </MantineProvider>
    );
}

export default App;
