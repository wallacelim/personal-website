import React, { useState } from "react";
import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import "./App.css";
import SideBar from "./components/SideBar";
import ViewToggle from "./components/ViewToggle";

const App = (viewMode) => {
    const [text, setText] = useState("");
    const [debounceWait, setDebounceWait] = useState(800);

    const animateView = {
        background: viewMode.BACKGROUND_PRIMARY,
        color: viewMode.HEADER_PRIMARY,
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
        <ThemeProvider theme={viewMode}>
            <Div
                animate={animateView}
                transition={{ duration: 0.5 }}
                className="App"
            >
                <ViewToggle />
                <SideBar />
                <Content>
                    <h3>Welcome to my personal website</h3>
                    <p>
                        Apparently, this website is still under construction. In
                        due time, I hope for this to be a repository of my
                        ventures into software engineering, or even life in
                        general!
                    </p>
                    <p> Just dumping everything here for now:</p>
                    <hr />
                    <div style={{ color: viewMode.TEXT_SECONDARY }}>
                        <h5>Debounced Function practice - Mar 16 2020</h5>
                        <p>Whatever is typed into here</p>
                        <Input
                            placeholder="Input text"
                            onChange={(e) => debouncedSetText(e.target.value)}
                        />
                        <p>will be echoed after</p>
                        <Input
                            placeholder="(Default=800)"
                            type="number"
                            onChange={(e) => setDebounceWait(parseInt(e.target.value, 10))
                            }
                        />
                        <p>miliseconds</p>
                        <div style={{ color: viewMode.HEADER_SECONDARY }}>
                            <h3>{text}</h3>
                        </div>
                    </div>
                    <hr />
                </Content>
            </Div>
        </ThemeProvider>
    );
};

const mapStateToProps = (state) => state.viewMode;

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
    width: 300px;
    height: 20px;
    border: ${(props) => props.theme.DEFAULT_BORDER};
    &:focus {
        outline: none;
    }
    padding: 5px;
`;
