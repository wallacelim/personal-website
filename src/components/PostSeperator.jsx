import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default () => {
    const dot = {
        whileHover: { scale: 1.2, rotate: 90 },
        whileTap: { scale: 0.8, rotate: -90, borderRadius: "100%" }
    };

    return (
        <FlexBox>
            <Dot variants={dot} whileHover="whileHover" whileTap="whileTap" />
            <Dot variants={dot} whileHover="whileHover" whileTap="whileTap" />
            <Dot variants={dot} whileHover="whileHover" whileTap="whileTap" />
        </FlexBox>
    );
};

const FlexBox = styled(motion.div)`
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 10%;
    padding: 30px 10px;
`;

const Dot = styled(motion.div)`
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 30px;
`;
