import React from "react";
import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import "./App.css";
import { SideBar } from "./components/SideBar";
import ViewToggle from "./components/ViewToggle";

const App = viewMode => {
    const animateView = {
        background: viewMode.BACKGROUND_PRIMARY,
        color: viewMode.HEADER_PRIMARY,
        transition: {
            delay: 0.1,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    };
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
                </Content>
            </Div>
        </ThemeProvider>
    );
};

const mapStateToProps = state => state.viewMode;

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
`;
