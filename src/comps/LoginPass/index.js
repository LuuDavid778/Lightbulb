import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Eye from '../../Images/PreviewPass.png';

const Container = styled.div`
display:flex;
flex-direction:column;
`;

const TextInput = styled.input`
width:263px;
height:35px;
margin-top:5px;
margin-bottom:15px;
outline:none;
border-top:none;
border-left:none;
border-right:none;
border-bottom:1px solid #B086F7;
::placeholder {
    color:#AFAFAF;
}
`;

const Title = styled.text`
font-size: 14px;
color:#B086F7;
font-family: 'Poppins', sans-serif;
font-weight:400;
`;

const ViewPass = styled.img`
position: absolute;
top: 30pt;
left: 180pt;
:hover {
    color: #00fcb6;
    cursor: pointer;
}
`;

const Text = styled.p`
color:#B086F7;
font-family: 'Poppins', sans-serif;
font-size:14px;
`;

const TextField = styled.div`
display:flex;
align-items:center;
`;

const TextCont = styled.div`
display:${props=>props.PassCheck ? props.PassCheck : "block"};
`;

const PassConfirm = styled.div`
border-radius: 100%;
width:7pt;
height:7pt;
border:5px solid #B8B8B8;
background-color:#B8B8B8;
margin-right:5pt;
`;

//#737373

const LoginPass = ({title, input, placeholder, PassCheck}) => {

    const [passwordShown, setPasswordShown] = useState(false);

    const [containsChar, setChar] = useState(false);
    const [containsCap, setCap] = useState(false);
    const [containsNum, setNum] = useState(false);
    const [allValid, setAllValid] = useState(false);

    
    const [password, setPassword] = useState("")

    const togglePasswordVisiblity = () => {
        console.log("test")
        setPasswordShown(passwordShown ? false : true);
      };

    const validatePassword = () => {
        // for (var i = 0; i < password.length; i++){
        //     console.log("pog" + password.charAt(i))

        // }
        if (password.length >= 8){
            setChar(true)
        } else {
            setChar(false)
        }
        if (/\d/.test(password)){
            setNum(true)
        } else {
            setNum(false)
        }
        if (/[A-Z]/.test(password)){
            setCap(true)
        } else {
            setCap(false)
        }
        if (containsChar && containsCap && containsNum) {
            setAllValid(true)
            console.log("yes" + password)
        } else {
            setAllValid(false)
            console.log("no" + password)
        }
    }

    useEffect(() => {
        validatePassword();
    },[password]);

    return<Container>
        <Title>{title}</Title>
        <TextInput
        type={passwordShown ? "text" : "password"}
        value={password}
        onChange={
            (e)=>{setPassword(e.target.value)
            }}
        placeholder={placeholder}
        />
        <ViewPass src={Eye} onClick={togglePasswordVisiblity}></ViewPass>
        <TextCont PassCheck={PassCheck}>
            <TextField>
                <PassConfirm style={{backgroundColor: containsChar === true ? "#737373" : "#B8B8B8"}}></PassConfirm>
                <Text>8 characters minimum</Text>
            </TextField>
            <TextField>
                <PassConfirm style={{backgroundColor: containsCap === true ? "#737373" : "#B8B8B8"}}></PassConfirm>
                <Text>Atleast one capital letter</Text>
            </TextField>
            <TextField>
                <PassConfirm style={{backgroundColor: containsNum === true ? "#737373" : "#B8B8B8"}}></PassConfirm>
                <Text>Atleast one number</Text>
            </TextField>
        </TextCont>
    </Container>
}

LoginPass.defaultProps = {
    title:"DEFAULT TITLE",
    placeholder:"Default Placeholder" 
}

export default LoginPass;