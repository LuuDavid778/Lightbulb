import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import Logo from './logo.svg';
 

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
`;

const FooterContents = styled.div`

`;

const LandingPage = () => {
 return <div>
     <AppTitle>LIGHTBULB</AppTitle>
    <FooterContents>
        <LoginSignupPrompt> Login or signup and jump into the action!</LoginSignupPrompt>
    </FooterContents>
 </div>
}

LandingPage.defaultProps = {

}

export default LandingPage;