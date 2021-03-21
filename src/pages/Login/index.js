import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import BackButton from '../../comps/BackButton';
import NextArrow from '../../Images/next-w.png';
import BackArrow from '../../Images/back-w.png';
import LoginInput from '../../comps/LoginInput';
import axios from 'axios';

import {useHistory} from 'react-router-dom'

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

const LoginButton = styled.button`
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

const Error = styled.div`
margin-top:10px;
font-size:13px;
text-align:left;
color:red;
`;

const Login = () => {
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const [error, setError]= useState("");
    const history = useHistory();
    
    const HandleLogin = async ()=> {
        const resp = await axios.post("http://localhost:8080/api/login",{ Username:username, password:password})
        console.log(resp.data);

        if (resp.data !== "incorrect credentials") {
            const token = resp.data.accessToken;
            sessionStorage.setItem("token", token);
            axios.defaults.headers.common['Authorization'] = "Bearer " + token;
            console.log("login success" , token)
            history.push("/")
        } else  {   
            setError("Your username/password is incorrect.")
        }
    }
    
    
 return <div>
    <All>
    <BackCont>
        <BackButton Arrow={BackArrow}></BackButton>
    </BackCont>
    <MainContent>
        <LoginInput title="Username" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}></LoginInput>
        <LoginInput title="PASSWORD" type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}></LoginInput>
        <CreateAccount>Don’t have an account? Create one.</CreateAccount>
        <Error>{error}</Error>

        <LoginButton onClick={HandleLogin}>Login</LoginButton>
    </MainContent>
 
    </All>
 </div>
}

Login.defaultProps = {

}

export default Login;