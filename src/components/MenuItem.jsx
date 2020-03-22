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

const MenuItem = ({ i }) => {
    const style = { border: `2px solid ${colors[i]}` };
    return (
        <ListItem
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <IconPlaceholder style={style} />
            <TextPlaceholder style={style}>Some Random Text</TextPlaceholder>
        </ListItem>
    );
};

const mapStateToProps = ({ viewMode }) => ({
    viewMode,
});

export default connect(mapStateToProps, null)(MenuItem);

const ListItem = styled(motion.li)`
    margin: 0 0 20px 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const IconPlaceholder = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex: 40px 0;
    margin-right: 20px;
`;

const TextPlaceholder = styled.div`
    border-radius: 5px;
    color: ${(props) => props.theme.TEXT_NEGATIVE};
    font-size: 16px;
    width: 200px;
    height: 20px;
    flex: 1;
`;
