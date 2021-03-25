import React, {useState} from 'react';
import styled from 'styled-components';



const Container = styled.div`
align-items:center;
justify-content:center;
width: 100%;
max-width:329px;
max-height: 200px;
background-color:#FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
font-family: 'Poppins', sans-serif;
font-size:14px;
// display:grid;
flex-direction: column;
box-sizing:border-box;
`;

// const AvatarHeader = styled.div`
// margin-bottom: 5px;
// display:flex;
// left: 10px;
// position: relative;
// `;
// const AvatarImg = styled.div`
// width:24px;
// height:24px;
// border:1px solid black;
// border-radius: 50px;
// // margin-left:10px;
// margin-top:6px;

// `;

// const AvatarName = styled.div`
// margin-left:12px;
// margin-top:11px;
// max-width:90px;
// font-size:12px;
// color: #7468A7;
// font-weight:500;
// `;

const CommentBox = styled.textarea`
width:100%;
min-width:306px;
max-width:306px;
max-height:70px;
border: 0px solid white
margin-left:12px;
background: #F9EDFF;
border-radius: 5px;
font-family: 'Poppins', sans-serif;
font-size:13px;
color: black;
top: 10px;
left: 10px;
position: relative;

`;

const PostButton = styled.button`
max-width:93px;
height:30px;
margin-bottom: 10px;
margin-top: 10px;
margin-left: 222px;
background: #7468A7;
border-radius: 5px;
color:white;
font-family: 'Poppins', sans-serif;
left: 50px;
position: relative;
hover{
    border: 1px solid white;
}
`;



const CommentPrompt = ({Placeholder, NameTxt, LikeNumber, onChange, onClick}) => {
    return<Container>
    {/* <AvatarHeader>
        <AvatarImg >  </AvatarImg>
        <AvatarName>{NameTxt}</AvatarName>
       
    </AvatarHeader> */}

    <CommentBox placeholder={Placeholder} onChange={onChange}></CommentBox>

    <PostButton onClick={onClick}>Post</PostButton>
    </Container>
}


CommentPrompt.defaultProps = {
    // LikeNumber: 120,
    CaptionTxt: "I spent all night on this for my Web Development class. I used styled.css and react for it. Here are some screenshots of my code. Let me know what you guys think! ",
    NameTxt:"Joe Le",
    Placeholder: "Share your comments!"
}

export default CommentPrompt; 