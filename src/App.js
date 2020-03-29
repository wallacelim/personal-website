import React from "react";
import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import "./App.css";
import SideBar from "./components/SideBar";
import ViewToggle from "./components/ViewToggle";
import { Text, HeaderPrimary } from "./constants/fonts";
import Posts from "./components/Posts";
import PostSeperator from "./components/PostSeperator";

const App = theme => {
    const animateView = {
        background: theme.BACKGROUND_PRIMARY,
        color: theme.PRIMARY,
        transition: {
            delay: 0.1,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    };

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
                    <HeaderPrimary>
                        Welcome to my personal website
                    </HeaderPrimary>
                    <Text>
                        This website is still under construction. I hope for
                        this to be a repository of my ventures into software
                        engineering, as well as life in general!
                    </Text>
                    <PostSeperator />
                    <HeaderPrimary>
                        What I've been up to recently:
                    </HeaderPrimary>
                    <Posts />
                </Content>
            </Div>
        </ThemeProvider>
    );
};

const mapStateToProps = state => state.theme;

export default connect(mapStateToProps, null)(App);

const Div = styled(motion.div)`
    overflow: scroll;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Content = styled(motion.div)`
    display: block;
    padding: 10vh 10vw;
`;
