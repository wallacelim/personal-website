import React from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import styled from "styled-components";
import PostSeperator from "./PostSeperator";
import _100420 from "../_posts/_100420";
import _300320 from "../_posts/_300320";
import _160320 from "../_posts/_160320";

const Posts = () => {
    // Post 2

    return (
        <Div>
            <_100420 />
            <PostSeperator />
            <_300320 />
            <PostSeperator />
            <_160320 />
            <PostSeperator />
        </Div>
    );
};

const mapStateToProps = (state) => state.theme;

export default connect(mapStateToProps, null)(Posts);

const Div = styled.div`
    text-align: start;
`;
