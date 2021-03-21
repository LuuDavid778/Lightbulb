import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:156px;
height:30px;
background-color:#FFFFFF;
border-radius:53px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
font-family: 'Poppins', sans-serif;
font-size:14px;
`;

const Image = styled.img`
object-fit: cover;

`;

const TextCont = styled.div`
margin:5pt;
`;


const SkillTag = ({HandleClick, BgColor, category}) => {

    return<Container BgColor={BgColor} onClick={HandleClick}>
        <TextCont>{category}</TextCont>
    </Container>
}

SkillTag.defaultProps = {
   category: "Interest here",
}

export default SkillTag; 