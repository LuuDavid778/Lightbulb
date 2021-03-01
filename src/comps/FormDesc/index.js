import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
`;

const TextField = styled.textarea`
width:263px;
height:96px;
outline:none;
margin-top:5px;
resize:none;
background-color:#F9EDFF;
border:none;
border-radius:5px;
padding-left:10px;
padding-top:10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
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

const FormDesc = ({title, input, placeholder}) => {

    return<Container>
        <Title>{title}</Title>
<TextField type='text' placeholder={placeholder} onChange={(e)=>{
    input(e.target.value);
}}/>
    </Container>
}

FormDesc.defaultProps = {
    title:"Default Title",
    placeholder:"Default Placeholder"
}

export default FormDesc;