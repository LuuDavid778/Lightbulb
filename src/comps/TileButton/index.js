import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
min-height: 25px;
width:100%;
max-width: 58.67741775512695px;
border-radius: 21px;
background-color:${props => props.bgcolor ? props.bgcolor : "red"};
display:flex;
justify-content:center;
align-items:center;
color:${props => props.color ? props.color : "white"};
margin-right:5px;
margin-left:5px;
cursor:pointer;

&:hover {
background-color:${props => props.hovercolor ? props.hovercolor: ""};
}
`;



const TileButton = ({bgcolor, color, hovercolor, label, onClick}) => {

    return<Container hovercolor={hovercolor} bgcolor={bgcolor} color={color} onClick={onClick}>
       <div>{label}</div>
    </Container>
}

TileButton.defaultProps = {
    bgcolor:"red",
    color:"white",
    label:"Default",
    onClick:()=>{},
    hovercolor: null
}

export default TileButton;