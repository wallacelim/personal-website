import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderPrimary = styled(motion.h1)`
    font-size: 2rem;
    color: ${(props) => props.theme.PRIMARY};
`;

export const HeaderSecondary = styled(motion.h2)`
    font-size: 1.5rem;
    color: ${(props) => props.theme.SECONDARY};
`;

export const HeaderTertiary = styled(motion.h3)`
    font-size: 1.25rem;
    color: ${(props) => props.theme.TERTIARY};
`;

export const Text = styled(motion.p)`
    font-size: 1rem;
    color: ${(props) => props.theme.MAIN};
`;
