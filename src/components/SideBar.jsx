import * as React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import SideBarButton from "./SideBarButton";
import { Navigation } from "./Navigation";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export const SideBar = props => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <Nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >
            <Div variants={sidebar} />
            <Navigation />
            <SideBarButton toggle={() => toggleOpen()} />
        </Nav>
    );
};

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
    border: 2px solid ${props => props.theme.HEADER_SECONDARY};
    background: ${props => props.theme.TEXT_PRIMARY};
`;
