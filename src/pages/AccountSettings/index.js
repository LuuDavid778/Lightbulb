import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import BackButton from '../../comps/BackButton';
import BackArrow from '../../Images/back-w.png';
import AvatarSelect from '../../comps/AvatarSelect';
import FormInput from '../../comps/FormInput';
import Button from '../../comps/Button';

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
display:flex;
flex-direction:column;
align-items:center;
`;

const ButtonCont = styled.div`
position:fixed;
bottom:30pt;
display:flex;
justify-content:space-evenly;
width:100vw;
`;

const AccountSettings = () => {
 return <div>
    <BackCont>
        <BackButton Arrow={BackArrow}></BackButton>
    </BackCont>
    <TitleCont>
        <Title weight="600">Account Settings</Title>
    </TitleCont>
    <MainContent>
        <Title>Edit Profile</Title>
        <AvatarSelect Check="none"></AvatarSelect>
        <FormInput title="New Password" placeholder="Password"></FormInput>
        <FormInput title="Confirm Password" placeholder="Password"></FormInput>
    </MainContent>
    <ButtonCont>
        <Button></Button>
        <Button text="Cancel" color="#B086F7" bgcolor="white"></Button>
    </ButtonCont>
 </div>
}

AccountSettings.defaultProps = {

}

export default AccountSettings;