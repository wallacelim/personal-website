import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import "./App.css";
import { DARK_THEME, LIGHT_THEME } from "./colors";
import { SideBar } from "./components/SideBar";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <ThemeProvider theme={darkMode ? DARK_THEME : LIGHT_THEME}>
            <Div className="App">
                <SideBar />
                <h3>Welcome to Wallace's personal website</h3>
            </Div>
        </ThemeProvider>
    );
}

export default App;

const Div = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    background: ${props => props.theme.BACKGROUND_PRIMARY};
    color: ${props => props.theme.HEADER_PRIMARY};
    overflow: hidden;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
