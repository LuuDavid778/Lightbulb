import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackButton from '../../comps/BackButton';
import NextArrow from '../../Images/next-w.png';
import BackArrow from '../../Images/back-w.png';
import LoginInput from '../../comps/LoginInput';
import LoginPass from '../../comps/LoginPass';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import AvatarSelect from '../../comps/AvatarSelect';

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
margin-top:30px;
color:white;
font-size:20px;
font-family:poppins;
cursor:pointer;
`;

const NextCont = styled.div`
position:fixed;
bottom:20pt;
right:20px;
`;

const AvatarCont = styled.div`
display: flex;
flex-direction:column;
`;

const Box = styled.div`
display:flex;
`;

const SignUp = () => {
const [username, setUser] = useState("");
const [pass, setPass] = useState("");
const [selected, setSelected] = useState(0);
const [checkMark, setCheckMark] = useState(false);
const [img, setImg] = useState("")
const history = useHistory();

var ImageSrc = "nothing";

const handleSelection = async (selection) =>{
 setSelected(selection);
 ConvertImageSrc();
}

const handleSignup = async () =>{
let resp = axios.post("http://localhost:8080/api/createUser", {Username:username, password:pass, ProfileImg:img})
history.push("/welcome");
}

const ConvertImageSrc = (selected) => {
    if(selected === 1){
        setImg("https://picsum.photos/id/1081/30/30")
    } else if (selected === 2){
        setImg("https://picsum.photos/id/1076/30/30")
    }  else if (selected === 3){
        setImg("https://picsum.photos/id/392/30/30")
        
    }  else if (selected === 4){
        setImg("https://picsum.photos/id/525/30/30")

    }  else if (selected === 5){
        setImg("https://picsum.photos/id/537/30/30")

    }  else if (selected === 6){
        setImg("https://picsum.photos/id/558/30/30")

    }

    console.log(img);
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
        <Box>
        <AvatarCont>
            <AvatarSelect onClick={()=>{ConvertImageSrc(1)}} Check={selected == 1 ? "block" : "none"} img="https://picsum.photos/id/1081/300/300"></AvatarSelect>
            <AvatarSelect onClick={()=>{ConvertImageSrc(2)}} Check={selected == 2 ? "block" : "none"} img="https://picsum.photos/id/1076/300/300"></AvatarSelect>
            <AvatarSelect onClick={()=>{ConvertImageSrc(3)}} Check={selected == 3 ? "block" : "none"} img="https://picsum.photos/id/392/300/300"></AvatarSelect>
        </AvatarCont>
        <AvatarCont>
            <AvatarSelect onClick={()=>{ConvertImageSrc(4)}} Check={selected == 4 ? "block" : "none"} img="https://picsum.photos/id/525/300/300"></AvatarSelect>
            <AvatarSelect onClick={()=>{ConvertImageSrc(5)}} Check={selected == 5 ? "block" : "none"} img="https://picsum.photos/id/537/300/300"></AvatarSelect>
            <AvatarSelect onClick={()=>{ConvertImageSrc(6)}} Check={selected == 6 ? "block" : "none"} img="https://picsum.photos/id/558/300/300"></AvatarSelect>
        </AvatarCont>
        </Box>
        <Button onClick={handleSignup}>Sign Up</Button>
    </MainContent>
 </div>
}

SignUp.defaultProps = {

}

export default SignUp;