import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackButton from '../../comps/BackButton';
import NextArrow from '../../Images/next-w.png';
import BackArrow from '../../Images/back-w.png';
import LoginInput from '../../comps/LoginInput';
import LoginPass from '../../comps/LoginPass';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Title = styled.p`
color:#7468A7;
font-size:22px;
font-weight:${props=>props.weight ? props.weight : ""};
`;

const TitleCont = styled.div`
display:flex;
justify-content:center;
margin-bottom:20pt;
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

const Button = styled.button`
width:100%;
max-width:263px;
height:50px;
background-color:#B086F7;
border-radius:20px;
border:none;
margin-top:15px;
color:white;
font-size:20px;
font-family:poppins;
`;

const NextCont = styled.div`
position:fixed;
bottom:20pt;
right:20px;
`;

const SignUp = () => {
const [username, setUser] = useState("");
const [pass, setPass] = useState("");
const history = useHistory();


const handleSignup = async () =>{
let resp = axios.post("http://localhost:8080/api/createUser", {Username:username, password:pass})
history.push("/login");
}




 return <div>
    <BackCont>
        <BackButton Arrow={BackArrow} onClick={()=>{
            history.goBack();
        }}></BackButton>
    </BackCont>
    <TitleCont>
        <Title weight="600">Create Account</Title>
    </TitleCont>
    <MainContent>
        <LoginInput title="Username" placeholder="Enter Username" onChange={(e)=>{
            setUser(e.target.value)
        }}></LoginInput>
        <LoginPass title="PASSWORD" placeholder="Enter Password" onChange={(e)=>{
            setPass(e.target.value)
        }}></LoginPass>

        <Button onClick={handleSignup}>Sign Up</Button>
    </MainContent>
 </div>
}

SignUp.defaultProps = {

}

export default SignUp;