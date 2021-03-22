import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import Logo from './logo.svg';
import Button from '../../comps/Button';
import AvatarSelect from '../../comps/AvatarSelect';
import BackButton from '../../comps/BackButton';
import NextButton from '../../comps/NextButton';
import './SignupAvatar.scss';
 
const Header = styled.div`
justify-content: center;
position: relative;
display:flex;
`;

const AppTitle = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 36px;
color: #B086F7;
`;

const AvatarCont = styled.div`
justify-content: center;
position: relative;
display:flex;
`;

const FooterCont = styled.div`
left:260px;
position: relative;
display:flex;
`;





const SignupAvatar = () => {
 return <div>
     <BackButton></BackButton>
     <Header>
         <AppTitle>Choose an avatar</AppTitle>
    </Header>

     <AvatarCont>
     <AvatarSelect></AvatarSelect>
     <AvatarSelect></AvatarSelect>
     </AvatarCont>

     <AvatarCont>
     <AvatarSelect></AvatarSelect>
     <AvatarSelect></AvatarSelect>
     </AvatarCont>

     <AvatarCont>
     <AvatarSelect></AvatarSelect>
     <AvatarSelect></AvatarSelect>
     </AvatarCont>

    <FooterCont>
     <NextButton></NextButton></FooterCont>
 </div>
}

SignupAvatar.defaultProps = {

}

export default SignupAvatar;