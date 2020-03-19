import React, { useState } from "react";
import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import "./App.css";
import SideBar from "./components/SideBar";
import ViewToggle from "./components/ViewToggle";

const App = viewMode => {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    const [maxCalls, setMaxCalls] = useState(3);
    const [timeframe, setTimeframe] = useState(1000);
    const [debounceWait, setDebounceWait] = useState(800);

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

    const increaseCount = () => {
        setCount(count + 1);
    };

    function rateLimit(func, interval, limit) {
        const queue = new Queue();

        return (...args) => {
            const currentTime = new Date().getTime();

            // Offload expired timestamps
            while (queue.size > 0 && currentTime - queue.getHead() > interval) {
                queue.dequeue();
            }

            // Call func if limit hasn't been reached
            if (queue.size < limit) {
                queue.enqueue(currentTime);
                return func(...args);
            }
        };
    }

    const rateLimitedIncreaseCount = rateLimit(
        increaseCount,
        timeframe,
        maxCalls
    );

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
                    <h5>Debounced Function practice - Mar 16 2020</h5>
                    <Input
                        placeholder={"Input some text here"}
                        onChange={e => debouncedSetText(e.target.value)}
                    />
                    <br />
                    <Input
                        placeholder={"Delay in ms (default=800ms)"}
                        type="number"
                        onChange={e =>
                            setDebounceWait(parseInt(e.target.value))
                        }
                    />
                    <p>{text}</p>
                    <hr />
                    <h5>Rate Limiter Function practice - Mar 17 2020</h5>
                    <p>Count can be increased a maximum of</p>
                    <Input
                        placeholder={"Maximum count (default=3)"}
                        type="number"
                        onChange={e => setMaxCalls(parseInt(e.target.value))}
                    />
                    <p>times every</p>
                    <Input
                        placeholder={"Timeframe (default=1000ms)"}
                        type="number"
                        onChange={e => setTimeframe(parseInt(e.target.value))}
                    />
                    <p>miliseconds</p>
                    <Button onClick={increaseCount}>
                        I am a rate-limited counter!
                    </Button>
                    <h1>{count}</h1>
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
    justify-content: center;
    align-items: center;
`;

const Input = styled(motion.input)`
    width: 300px;
    height: 20px;
    border-radius: 2px;
    border-style: solid;
    &:focus {
        outline: none;
    }
    padding: 5px;
`;

const Button = styled(motion.button)``;

class Queue {
    constructor() {
        this.enqueue_stack = [];
        this.dequeue_stack = [];
        this.size = 0;
    }

    enqueue(val) {
        this.size += 1;
        this.enqueue_stack.push(val);
    }

    dequeue() {
        if (this.size === 0) {
            throw new Error("Queue is empty");
        }
        if (this.dequeue_stack.length === 0) {
            while (this.enqueue_stack.length > 0) {
                const popped = this.enqueue_stack.pop();
                this.dequeue_stack.push(popped);
            }
        }
        this.size -= 1;
        return this.dequeue_stack.pop();
    }

    getHead() {
        if (this.size === 0) {
            throw new Error("Queue is empty");
        }
        if (this.dequeue_stack.length > 0) {
            return this.dequeue_stack[this.dequeue_stack.length - 1];
        }
        if (this.enqueue_stack.length > 0) {
            return this.enqueue_stack[0];
        }
    }
}
