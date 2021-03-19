import React, { useState } from 'react';
import styled from 'styled-components';
import blackicon from '../../Images/back-b.png';
import whiteicon from '../../Images/back-w.png';


const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:37px;
height:37px;
background-color:${props=>props.BgColor ? props.BgColor : "#B086F7"};
border-radius:10px;

margin-top: 10px;
margin-left: 10px;
`;

const Image = styled.img``;


const BackButton = ({HandleClick, BgColor, Arrow}) => {

    return<Container BgColor={BgColor} onClick={HandleClick}>
        <Image src={whiteicon}></Image>
    </Container>
}

BackButton.defaultProps = {
    Arrow:""
}

export default BackButton;