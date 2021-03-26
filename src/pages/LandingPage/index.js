import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import Logo from './logo.svg';
import Button from '../../comps/Button';
import LandingLogo from '../../comps/LandingLogo';
import './LandingPage.scss';
import {useHistory} from 'react-router-dom';

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

margin-top: px;
align-self:center;
position: relative;
bottom: 30px;
display:flex;
justify-content:center;
`;

const FooterContents = styled.div`
background: #B086F7;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
width: 100%;
height: 277px;
position: relative;
bottom: -230px;
`;

const LandingPage = () => {
    const history = useHistory();
 return <div>
     <AppTitle>LIGHTBULB</AppTitle>
     <div className="LandingLogo">
     <LandingLogo></LandingLogo></div>
    <FooterContents>
        <LoginSignupPrompt> Login or signup and jump into the action!</LoginSignupPrompt>
        <div className="Buttons">
            <div id="button">
        <Button onClick={()=>{
            history.push("/login")
        }}width="230px" text="Login" color="#B086F7" bgcolor="white"></Button>
        </div>
        <Button onClick={()=>{
            history.push("/signup")
        }}width="230px" text="Sign up" color="#B086F7" bgcolor="white"></Button>
        </div>
    </FooterContents>
 </div>
}

LandingPage.defaultProps = {

}

export default LandingPage;