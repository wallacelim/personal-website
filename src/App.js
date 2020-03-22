import React, { useState } from "react";
import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import "./App.css";
import SideBar from "./components/SideBar";
import ViewToggle from "./components/ViewToggle";
import {
    Text, HeaderPrimary, HeaderSecondary, HeaderTertiary,
} from "./constants/fonts";

const App = (theme) => {
    const [text, setText] = useState("");
    const [debounceWait, setDebounceWait] = useState(800);

    const animateView = {
        background: theme.BACKGROUND_PRIMARY,
        color: theme.PRIMARY,
        transition: {
            delay: 0.1,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    };

    function debounce(func, wait) {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func(...args);
            }, wait);
        };
    }

    const debouncedSetText = debounce(setText, debounceWait);

    return (
        <ThemeProvider theme={theme}>
            <Div
                animate={animateView}
                transition={{ duration: 0.5 }}
                className="App"
            >
                <ViewToggle />
                <SideBar />
                <Content>
                    <HeaderPrimary>Welcome to my personal website</HeaderPrimary>
                    <Text>
                        This website is still under construction.
                        I hope for this to be a repository of my
                        ventures into software engineering, as well as life in
                        general!
                    </Text>
                    <HeaderTertiary> Just dumping everything here for now:</HeaderTertiary>
                    <hr />
                    <div >
                        <HeaderSecondary>Debounced Function practice - Mar 16 2020</HeaderSecondary>
                        <Text>Whatever is typed into here</Text>
                        <Input
                            placeholder="Input text"
                            onChange={(e) => debouncedSetText(e.target.value)}
                        />
                        <Text>will be echoed after</Text>
                        <Input
                            placeholder="(Default=800)"
                            type="number"
                            onChange={(e) => setDebounceWait(parseInt(e.target.value, 10))
                            }
                        />
                        <Text>miliseconds</Text>
                        <div style={{ color: theme.SECONDARY }}>
                            <HeaderTertiary>{text}</HeaderTertiary>
                        </div>
                    </div>
                    <hr />
                </Content>
            </Div>
        </ThemeProvider>
    );
};

const mapStateToProps = (state) => state.theme;

export default connect(mapStateToProps, null)(App);

const Div = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Content = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Input = styled(motion.input)`
    width: 20rem;
    height: 1.25rem;
    border: ${(props) => props.theme.DEFAULT_BORDER};
    &:focus {
        outline: none;
    }
    padding: 0.25rem;
`;
