import React, {useState} from 'react';
import styled from 'styled-components';
import HeartLike from '../../Images/heart.svg'



const Container = styled.div`
align-items:center;
justify-content:center;
width: 100%;
max-width:329px;
max-height: 390px;
background-color:#FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
font-family: 'Poppins', sans-serif;
font-size:14px;
display:grid;
flex-direction: column;
`;

const AvatarHeader = styled.div`
margin-bottom: 5px;
display:flex;
`;
const AvatarImg = styled.div`
width:40px;
height:40px;
border:1px solid black;
border-radius: 50px;
margin-left:10px;
margin-top:6px;

`;
const AvatarName = styled.div`
margin-left:12px;
margin-top:14px;
max-width:90px;
font-size:16px;
color: #7468A7;
font-weight:500;
`;



const TextCont = styled.div`
margin:5pt;
`;

const PostCaption = ({caption, username, LikeNumber}) => {
    return<Container>
    <AvatarHeader>
        <AvatarImg></AvatarImg>
        <AvatarName>{username}</AvatarName>
       
    </AvatarHeader>
    <TextCont>{caption}</TextCont>
    </Container>
}


PostCaption.defaultProps = {
    LikeNumber: 120,
    caption: "I spent all night on this for my Web Development class. I used styled.css and react for it. Here are some screenshots of my code. Let me know what you guys think! ",
    username:"Joe Le",
}

export default PostCaption; 