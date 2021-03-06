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


const SkillTag = ({HandleClick, BgColor, SkillText, SkillImg}) => {

    return<Container BgColor={BgColor} onClick={HandleClick}>
        <Image src={SkillImg}></Image>
        <TextCont>{SkillText}</TextCont>
    </Container>
}

SkillTag.defaultProps = {
    SkillText: "Interest here",
    SkillImg : "./ReactLogo.png",
}

export default SkillTag; 