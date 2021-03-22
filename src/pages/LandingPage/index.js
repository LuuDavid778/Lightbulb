import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import Logo from './logo.svg';
import Button from '../../comps/Button';
import './LandingPage.scss';
 

const AppTitle = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 72px;
color: #B086F7;
margin-left: 59px ;
margin-top: 42px;
align-self:center;
`;

const LoginSignupPrompt = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #7468A7;
margin-left: 43px ;
// margin-top: 42px;
align-self:center;
position: relative;
bottom: 30px;
`;

const FooterContents = styled.div`
background: #B086F7;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
width: 377px;
height: 277px;
position: relative;
bottom: -430px;
`;

const LandingPage = () => {
 return <div>
     <AppTitle>LIGHTBULB</AppTitle>
    <FooterContents>
        <LoginSignupPrompt> Login or signup and jump into the action!</LoginSignupPrompt>
        <div className="Buttons">
        <Button text="Login"></Button>
        <Button text="Signup"></Button>
        </div>
    </FooterContents>
 </div>
}

LandingPage.defaultProps = {

}

export default LandingPage;