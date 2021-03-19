import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import BackButton from '../../comps/BackButton';
import NextArrow from '../../Images/next-w.png';
import BackArrow from '../../Images/back-w.png';
import LoginInput from '../../comps/LoginInput';
import LoginPass from '../../comps/LoginPass';

const Title = styled.p`
color:#7468A7;
font-size:22px;
font-weight:${props=>props.weight ? props.weight : ""};
`;

const TitleCont = styled.div`
display:flex;
justify-content:center;
`;

const BackCont = styled.div`
margin-left:10pt;
margin-top:10pt;
`;

const MainContent = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;

`;



const NextCont = styled.div`
position:fixed;
bottom:20pt;
right:20px;
`;

const SignUp = () => {
 return <div>
    <BackCont>
        <BackButton Arrow={BackArrow}></BackButton>
    </BackCont>
    <TitleCont>
        <Title weight="600">Tell us about yourself</Title>
    </TitleCont>
    <MainContent>
        <LoginInput title="Username" placeholder="davidluu604"></LoginInput>
        <LoginPass title="PASSWORD" placeholder="••••••••"></LoginPass>
    </MainContent>
    <NextCont>
        <BackButton Arrow={NextArrow}></BackButton>
    </NextCont>
 </div>
}

SignUp.defaultProps = {

}

export default SignUp;