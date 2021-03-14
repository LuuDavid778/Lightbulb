import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:292px;
height:60px;
background-color:${props=>props.BgColor ? props.BgColor : "#FFFFFF"};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 32px;
margin-top: 20px;
`;

const TextCont = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
/* identical to box height */


color: #7468A7;`;


const Button = ({HandleClick, BgColor, text}) => {

    return<Container BgColor={BgColor}>
        <TextCont> {text} </TextCont>
    </Container>
}

Button.defaultProps = {
    text: "Log in"
}

export default Button;