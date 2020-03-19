import React from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { toggleViewMode } from "../redux/actions";
import styled from "styled-components";

const ViewToggle = ({ viewMode, toggleViewMode }) => {
    const view = {
        width: "fixed",
        background: viewMode.TEXT_PRIMARY,
        borderColor: viewMode.HEADER_SECONDARY,
        transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    };

    return (
        <Button onClick={() => toggleViewMode()} animate={view}>
            {viewMode.TYPE === "DARK" ? "Light" : "Dark"} Mode
        </Button>
    );
};

const mapStateToProps = state => {
    return { viewMode: state.viewMode };
};

export default connect(mapStateToProps, { toggleViewMode })(ViewToggle);

const Button = styled(motion.button)`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
    border: ${props => props.theme.DEFAULT_BORDER};
    font-family: Fira Code;
    border-radius: 10px 10px;
    &:focus {
        outline: none;
    }
`;
