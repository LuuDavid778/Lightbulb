import React, { useState } from 'react';
import styled from 'styled-components';

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

const LoginInput = ({title, input, placeholder, onChange,type}) => {

    return<Container>
        <Title>{title}</Title>
        <TextInput type={type} placeholder={placeholder} onChange={onChange}/>
    </Container>
}

LoginInput.defaultProps = {
    type:"text",
    title:"DEFAULT TITLE",
    placeholder:"Default Placeholder",
    onChange:()=>{}
}

export default LoginInput;