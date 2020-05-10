import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const items = [
    {
        displayText: "BLOG",
        tooltip: "Day to day musings",
    },
    {
        displayText: "PORTFOLIO",
        tooltip: "Things I've worked on",
    },
    {
        displayText: "LEARNING PATH",
        tooltip: "Things I have learnt or am learning",
    },
    {
        displayText: "GITHUB",
        tooltip: "My only social(?) media",
    },
    {
        displayText: "RESUME",
        tooltip: "Click to download",
    },
]; // TODO: replace this stub

export default () => (
    <UnorderedList variants={variants}>
        {items.map((item, idx) => (
            <MenuItem idx={idx} key={item.displayText} item={item} />
        ))}
    </UnorderedList>
);

const UnorderedList = styled(motion.ul)`
    margin: 0;
    padding: 1.5rem;
    position: absolute;
    top: 6rem;
    width: 15rem;
`;
