import * as React from "react";
import { useRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";
import SideBarButton from "./SideBarButton";
import { Navigation } from "./Navigation";

const SideBar = ({ viewMode }) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const open = {
        background: viewMode.TEXT_PRIMARY,
        borderColor: viewMode.HEADER_SECONDARY,
        clipPath: `circle(101vh at 40px 40px)`,
        transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    };
    const closed = {
        background: viewMode.TEXT_PRIMARY,
        borderColor: viewMode.HEADER_SECONDARY,
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    };

    const containerRef = useRef(null);

    return (
        <Nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            ref={containerRef}
        >
            <Div animate={isOpen ? open : closed} />
            <Navigation />
            <SideBarButton toggle={() => toggleOpen()} />
        </Nav>
    );
};

const mapStateToProps = ({ viewMode }) => ({
    viewMode
});

export default connect(mapStateToProps, null)(SideBar);

const Nav = styled(motion.nav)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
`;

const Div = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    border: 2px solid;
    /* background: ${props => props.theme.TEXT_PRIMARY};
    border: ${props => props.theme.DEFAULT_BORDER}; */
`;
