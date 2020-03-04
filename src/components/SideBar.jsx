import * as React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";
import SideBarButton from "./SideBarButton";
import { Navigation } from "./Navigation";

const sidebar = {
    open: {
        clipPath: `circle(101vh at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    },
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

    return (
        <Nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
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
