import React from 'react';
import styled from 'styled-components';


const InteresContainer = styled.div`
display: flex;
align-items:center;
justify-content: center;
width:318px;
height:63px;
background-color:${props=>props.bgcolor ? props.bgcolor : "#B086F7"};
border-radius:10px;
`;

const InterestsImg = styled.img`
width:${props=>props.width ? props.width : "40px"};
height:${props=>props.height ? props.height : "40px"};
background-size:cover;
border-radius:100px;
object-fit: cover;
margin-right:15px;
`;

const InterestsTitle = styled.text`
    font-size: 18px;
    color:${props=>props.fontcolor ? props.fontcolor : "#FFF"};
`;

const CheckImg = styled.img`
width:25px;
height:25px;
background-size:cover;
border-radius:100px;
object-fit: cover;
margin-left:60px;
`;


const InterestsAvatar = ({width, height, bgcolor, bgimg, fontcolor, text}) =>{
    return <InteresContainer 
    width={width} height={height} bgcolor={bgcolor}>
        <InterestsImg src={bgimg}></InterestsImg>
        <InterestsTitle fontcolor={fontcolor}>{text}</InterestsTitle>
        <CheckImg src='./checkmark.png'></CheckImg>    
    </InteresContainer>
}

InterestsAvatar.defaultProps = {
    bgimg : "./graphicdesign.png",
    text: "Graphic Design",
}

export default InterestsAvatar;