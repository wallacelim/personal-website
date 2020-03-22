import React from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import styled from "styled-components";
import { toggleViewMode } from "../redux/actions";

const ViewToggle = ({ theme, toggleView }) => {
    const view = {
        width: "fixed",
        background: theme.MAIN,
        border: theme.DEFAULT_BORDER,
        transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    };

    return (
        <Button onClick={toggleView} animate={view}>
            {theme.TYPE === "DARK" ? "Light" : "Dark"} Mode
        </Button>
    );
};

const mapStateToProps = (state) => ({ theme: state.theme });

const mapDispatchToProps = (dispatch) => ({
    toggleView: () => dispatch(toggleViewMode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewToggle);

const Button = styled(motion.button)`
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    font-size: 1.25rem;
    border: ${(props) => props.theme.DEFAULT_BORDER};
    font-family: inherit;
    border-radius: 10px 10px;
    &:focus {
        outline: none;
    }
`;
