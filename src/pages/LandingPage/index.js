import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from './logo.svg';
 

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

const LandingPage = () => {
 return <div>
     <AppTitle>LIGHTBULB</AppTitle>
    <Logo></Logo>
 </div>
}

LandingPage.defaultProps = {

}

export default LandingPage;