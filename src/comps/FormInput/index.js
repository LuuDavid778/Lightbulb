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

const FormInput = ({title, input, placeholder}) => {

    return<Container>
        <Title>{title}</Title>
        <TextInput type='text' placeholder={placeholder} onChange={(e)=>{
            input(e.target.value);
        }}/>
    </Container>
}

FormInput.defaultProps = {
    title:"Default Title",
    placeholder:"Default Placeholder"
}

export default FormInput;