import React, { useState } from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import styled from "styled-components";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import { Text, HeaderSecondary, HeaderTertiary } from "../constants/fonts";
import PostSeperator from "./PostSeperator";

const Posts = theme => {
    const [text, setText] = useState("");
    const [exmapleThunkCode, setExampleThunkCode] = useState(`
    function wrapper() {
        return function thunk() {
            // In Redux, another dispatch / API call is usually nested here. For example:
            fetch('/data);
        };
    }
    `);
    const reduxThunkCode = `
    function createThunkMiddleware(extraArgument) {
        return ({ dispatch, getState }) => next => action => {
              
            if (typeof action === 'function') {
                return action(dispatch, getState, extraArgument);
            }

            return next(action);
        };
    }
      
    const thunk = createThunkMiddleware();
    thunk.withExtraArgument = createThunkMiddleware;
      
    export default thunk;
    `;
    const [debounceWait, setDebounceWait] = useState(800);

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

    // Post 2

    return (
        <>
            <HeaderSecondary>
                Learning the basics of Redux Thunks - Mar 30 2020
            </HeaderSecondary>
            <HeaderTertiary>What is a thunk?</HeaderTertiary>
            <Text>
                Essentially, thunks are functions returned by functions. For
                instance:
            </Text>

            <CodeEditor
                value={exmapleThunkCode}
                onValueChange={exmapleThunkCode =>
                    setExampleThunkCode(exmapleThunkCode)
                }
                highlight={exmapleThunkCode =>
                    highlight(exmapleThunkCode, languages.js)
                }
                tabSize={4}
                padding={10}
            />
            <HeaderTertiary>Why use redux-thunk?</HeaderTertiary>
            <Text>
                Since reducers are pure functions by convention, dispatching API
                calls / actions should not be accomplished within them. As such,
                we can use the redux-thunk middleware to perform these actions.
            </Text>
            <HeaderTertiary>How does redux-thunk work?</HeaderTertiary>
            <Text>
                It is a middleware which calls functions which are passed in as
                actions. It's implementation is short and sweet:
            </Text>
            <CodeEditor
                value={reduxThunkCode}
                onValueChange={reduxThunkCode => reduxThunkCode}
                highlight={reduxThunkCode =>
                    highlight(reduxThunkCode, languages.js)
                }
                tabSize={4}
                padding={10}
            />
            <div style={{ color: theme.SECONDARY }}>
                <HeaderTertiary>{text}</HeaderTertiary>
            </div>
            <PostSeperator />
            <HeaderSecondary>
                Debounced Function practice - Mar 16 2020
            </HeaderSecondary>
            <Text>Whatever is typed into here</Text>
            <Input
                placeholder="Input text"
                onChange={e => debouncedSetText(e.target.value)}
            />
            <Text>will be echoed after</Text>
            <Input
                placeholder="(Default=800)"
                type="number"
                onChange={e => setDebounceWait(parseInt(e.target.value, 10))}
            />
            <Text>miliseconds</Text>
            <div style={{ color: theme.SECONDARY }}>
                <HeaderTertiary>{text}</HeaderTertiary>
            </div>
            <PostSeperator />
        </>
    );
};

const mapStateToProps = state => state.theme;

export default connect(mapStateToProps, null)(Posts);

const Input = styled(motion.input)`
    width: 20rem;
    height: 1.25rem;
    border: ${props => props.theme.DEFAULT_BORDER};
    &:focus {
        outline: none;
    }
    padding: 0.25rem;
`;

const CodeEditor = styled(Editor)`
    font-family: Fira Code, Fira Mono, monospace;
    font-size: 16;
    background: ${props => props.theme.BACKGROUND_SECONDARY};
    border-radius: 20px;
    z-index: 0;
`;
