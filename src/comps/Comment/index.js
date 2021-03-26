import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
min-height:94px;
max-height:200px;
width:100%;
max-width:329px;
border-radius:10px;
padding-left:20px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
padding-bottom:20px;
background-color:white;
box-sizing:border-box;
margin-bottom:10px;
`;


const TopRow = styled.div`
display:flex;
`;

const Content = styled.div`
margin-top:5px;
overflow:hidden;
margin-right:20px
`;
const ProfilePic = styled.img`
width:24px;
height:24px;
border-radius:50px;
margin-right:10px;
`;

const TopDiv = styled.div`
display:flex;
align-items:center;
margin-top:15px;
color:#7468A7;
justify-content:space-between;
width:100%;
margin-right:20px;
`;


const ProfileDiv = styled.div`
display:flex;
align-items:center;
`;

const OptionIcon = styled.div`
cursor:pointer;
display:flex;
align-items:center;
`;

const BottomRow = styled.div`
display:flex;
align-items:center;
margin-top:5px;
`;

const HeartIcon = styled.div`
margin-right:5px;
`;
const Comment = ({username, comment, likes, url, iconOnClick}) => {

    return<Container>
        <TopRow>
<TopDiv>
    <ProfileDiv>
     <ProfilePic src={url}></ProfilePic>
     {username}
    </ProfileDiv>
    <OptionIcon onClick={iconOnClick}>
    <svg width="19" height="5" viewBox="0 0 19 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#C4C4C4"/>
            <circle cx="9.5" cy="2.5" r="2.5" fill="#C4C4C4"/>
            <circle cx="16.5" cy="2.5" r="2.5" fill="#C4C4C4"/>
        </svg>
        </OptionIcon>
</TopDiv>
        </TopRow>
        <Content>
            {comment}
        </Content>
    </Container>
}

Comment.defaultProps = {
    username: "Rocky",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque eu tincidunt tortor aliquam nulla.",
    likes: 5,
    url:"https://via.placeholder.com/30",
    iconOnClick: ()=>{}
}

export default Comment;