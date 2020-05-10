/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PostSeperator from "./PostSeperator";
import _100420 from "../posts/2020-04-10";
import _300320 from "../posts/2020-03-30";
import _160320 from "../posts/2020-03-16";

const Posts = () => (
    // Post 2

    <Div>
        <_100420 />
        <PostSeperator />
        <_300320 />
        <PostSeperator />
        <_160320 />
        <PostSeperator />
    </Div>
);
const mapStateToProps = ({ theme }) => theme;

export default connect(mapStateToProps, null)(Posts);

const Div = styled.div`
    text-align: start;
`;
