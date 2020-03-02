import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = () => (
    <UnorderedList variants={variants}>
        {itemIds.map(i => (
            <MenuItem i={i} key={i} />
        ))}
    </UnorderedList>
);

const itemIds = [0, 1, 2, 3, 4];

const UnorderedList = styled(motion.ul)`
    margin: 0;
    padding: 25px;
    position: absolute;
    top: 100px;
    width: 230px;
`;
