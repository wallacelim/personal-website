import React from "react";
import styled from "styled-components";
import { Text, HeaderSecondary } from "../../constants/fonts";

export default () => (
    <>
        <HeaderSecondary>
            Implementing Private/Protected Members in Javascript - Apr 10 2020
        </HeaderSecondary>
        <Text>
            An interesting quote I found in{" "}
            <Hyperlink href="https://philipwalton.com/articles/implementing-private-and-protected-members-in-javascript/">
                Philip Walton's blog post
            </Hyperlink>
            :
        </Text>
        <hr />
        <Quote>
            "Do not use _ (underbar) as the first character of a name. It is
            sometimes used to indicate privacy, but it does not actually provide
            privacy. If privacy is important, use the forms that provide private
            members. Avoid conventions that demonstrate a lack of competence."{" "}
        </Quote>
        -{" "}
        <Hyperlink href="https://en.wikipedia.org/wiki/Douglas_Crockford">
            Douglas Crockford
        </Hyperlink>
        <hr />
    </>
);

const Hyperlink = styled.a`
    color: ${(props) => props.theme.TERTIARY} !important;
`;

const Quote = styled.i`
    color: ${(props) => props.theme.SECONDARY};
`;
