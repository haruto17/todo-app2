import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import {
    MantineProvider,
    ColorScheme,
    ColorSchemeProvider,
    ActionIcon,
    useMantineColorScheme,
    Group,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

function Demo() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Group position="center" my="xl">
            <ActionIcon
                onClick={() => toggleColorScheme()}
                size="lg"
                sx={(theme) => ({
                    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
                    color: theme.colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[6],
                })}
            >
                {colorScheme === "dark" ? <IconSun size="1.2rem" /> : <IconMoonStars size="1.2rem" />}
            </ActionIcon>
        </Group>
    );
}

function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
    return (
        <div>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                    <Demo />
                </MantineProvider>
            </ColorSchemeProvider>
            <TodoList />
        </div>
    );
}

export default App;
