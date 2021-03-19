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
<BottomRow>
    <HeartIcon>
<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.32745 12.0367L5.44205 11.2306C2.29736 8.37904 0.221252 6.49834 0.221252 4.19019C0.221252 2.30949 1.69895 0.831787 3.57966 0.831787C4.64214 0.831787 5.66187 1.32639 6.32745 2.10798C6.99302 1.32639 8.01276 0.831787 9.07523 0.831787C10.9559 0.831787 12.4336 2.30949 12.4336 4.19019C12.4336 6.49834 10.3575 8.37904 7.21284 11.2367L6.32745 12.0367Z" fill="#646464"/>
</svg>
</HeartIcon>
{likes}
</BottomRow>
    </Container>
}

Comment.defaultProps = {
    username: "Rocky",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque eu tincidunt tortor aliquam nulla.",
    likes: 5,
    url:"https://placekeanu.com/26/26",
    iconOnClick: ()=>{}
}

export default Comment;