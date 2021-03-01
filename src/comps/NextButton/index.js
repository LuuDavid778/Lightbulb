import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:70px;
height:70px;
background-color:${props=>props.BgColor ? props.BgColor : "#B086F7"};
border-radius:20px;
`;

//37x37 for small button
//70x70 for big

const Image = styled.img``;


const BackButton = ({HandleClick, BgColor, Arrow}) => {

    return<Container BgColor={BgColor} onClick={HandleClick}>
        <Image src={Arrow}></Image>
    </Container>
}

BackButton.defaultProps = {
}

export default BackButton;