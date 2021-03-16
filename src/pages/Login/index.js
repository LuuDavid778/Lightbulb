import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import BackButton from '../../comps/BackButton';
import NextArrow from '../../Images/next-w.png';
import BackArrow from '../../Images/back-w.png';
import LoginInput from '../../comps/LoginInput';

const All = styled.div`
width:100vw;
height:100vh;
`;

const BackCont = styled.div`
padding-left:10pt;
padding-top:10pt;
`;

const MainContent = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
height:80%;
`;

const CreateAccount = styled.a`
font-size: 14px;
color:#B086F7;
font-family: 'Poppins', sans-serif;
width:263px;
border-bottom:1px solid #B086F7;
::placeholder {
    color:#AFAFAF;
}
`;

const NextCont = styled.div`
position:fixed;
bottom:20pt;
right:20px;
`;

const Login = () => {
 return <div>
    <All>
    <BackCont>
        <BackButton Arrow={BackArrow}></BackButton>
    </BackCont>
    <MainContent>
        <LoginInput title="Username" placeholder="davidluu604"></LoginInput>
        <LoginInput title="PASSWORD" placeholder="••••••••"></LoginInput>
        <CreateAccount>Don’t have an account? Create one.</CreateAccount>
    </MainContent>
    <NextCont>
        <BackButton Arrow={NextArrow}></BackButton>
    </NextCont>
    </All>
 </div>
}

Login.defaultProps = {

}

export default Login;