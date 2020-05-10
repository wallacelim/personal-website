import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
    open: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            x: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        x: -300,
        y: 0,
        opacity: 0,
        transition: {
            x: { stiffness: 1000 },
        },
    },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem = ({ idx, item: { displayText } }) => {
    const style = { border: `2px solid ${colors[idx]}` };
    return (
        <ListItem
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert("clicked")} // TODO: remove stub
        >
            <IconPlaceholder style={style} />
            <TextPlaceholder style={style}>{displayText}</TextPlaceholder>
        </ListItem>
    );
};

const mapStateToProps = ({ theme }) => ({
    theme,
});

export default connect(mapStateToProps, null)(MenuItem);

const ListItem = styled(motion.li)`
    margin: 0 0 1.25rem 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const IconPlaceholder = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    flex: 2.5rem 0;
    margin-right: 1.25rem;
`;

const TextPlaceholder = styled.div`
    border-radius: 5px;
    padding-bottom: 10px;
    color: ${(props) => props.theme.NEGATIVE};
    font-size: 1rem;
    width: 12.5rem;
    height: 1.25rem;
    flex: 1;
`;
