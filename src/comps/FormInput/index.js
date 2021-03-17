import React, { useState } from 'react';
import styled from 'styled-components';

import HomeC from '../../Images/home-colour.png'

const Container = styled.div`
display:flex;
flex-direction:column;
width: 283px;
`;

const TextInput = styled.input`
width:100%;
max-width:${props => props.width ? props.width: "263px"};
height:${props => props.height ? props.height: "34px"};
margin-top:5px;
margin-bottom:15px;
outline:none;
background-color:#F9EDFF;
border:none;
border-radius:5px;
padding-left:10px;
::placeholder {
    color:#AFAFAF;
}
`;

const Title = styled.text`
font-size: 22px;
color:#7468A7;
font-family: 'Poppins', sans-serif;
`;

const FormInput = ({title, input, placeholder, width, onChange, height}) => {

    return<Container>
        <Title>{title}</Title>
        <TextInput height={height} type='text' width={width} placeholder={placeholder} onChange={onChange}/>
    </Container>
}

FormInput.defaultProps = {
    title:"Default Title",
    placeholder:"Default Placeholder",
    width:"263px",
    onChange:()=>{}
}

export default FormInput;