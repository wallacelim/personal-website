import React, { useRef } from "react";

import { connect } from "react-redux";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";
import SideBarButton from "./SideBarButton";
import Menu from "./Menu";

const SideBar = ({ theme }) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const open = {
        background: theme.MAIN,
        border: theme.DEFAULT_BORDER,
        clipPath: "circle(100vh at 2.5rem 2.5rem)",
        transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    };
    const closed = {
        background: theme.MAIN,
        clipPath: "circle(2rem at 2.5rem 2.5rem)",
        transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    };

    const containerRef = useRef(null);

    return (
        <Nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            ref={containerRef}
        >
            <Div animate={isOpen ? open : closed} />
            <Menu />
            <SideBarButton toggle={() => toggleOpen()} />
        </Nav>
    );
};

const mapStateToProps = ({ theme }) => ({
    theme,
});

export default connect(mapStateToProps, null)(SideBar);

const Nav = styled(motion.nav)`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 20rem;
    z-index: 1;
`;

const Div = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 20rem;
`;
