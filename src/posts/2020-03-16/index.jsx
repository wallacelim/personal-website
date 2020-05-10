import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Text, HeaderSecondary, HeaderTertiary } from "../../constants/fonts";

export default (theme) => {
    const [text, setText] = useState("");
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
    return (
        <>
            <HeaderSecondary>
                Debounced Function practice - Mar 16 2020
            </HeaderSecondary>
            <Text>Whatever is typed into here</Text>
            <Input
                placeholder="Input text"
                onChange={(e) => debouncedSetText(e.target.value)}
            />
            <Text>will be echoed after</Text>
            <Input
                placeholder="(Default=800)"
                type="number"
                onChange={(e) => setDebounceWait(parseInt(e.target.value, 10))}
            />
            <Text>miliseconds</Text>
            <div style={{ color: theme.SECONDARY }}>
                <HeaderTertiary>{text}</HeaderTertiary>
            </div>
        </>
    );
};

const Input = styled(motion.input)`
    width: 20rem;
    height: 1.25rem;
    border: ${(props) => props.theme.DEFAULT_BORDER};
    &:focus {
        outline: none;
    }
    padding: 0.25rem;
`;
