import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
background: #FFFFFF;
border-radius: 21px;
min-height: 48px;
width:100%;
max-width: ${props=> props.width ? props.width : "130px"};
border-radius: 21px;
background-color:${props => props.bgcolor ? props.bgcolor : "red"};
color:${props => props.color ? props.color : "white"};
display:flex;
justify-content:center;
align-items:center;
`;

const Content = styled.div`
display:flex;
align-items:center;

`;

const Username = styled.div`
font-size:12px;
`;

const Image = styled.img`
max-width:40px;
height:40px;
border-radius:50px;
margin-right:10px;
`;
const PostAuthorTag = ({bgcolor, color, username, url, width}) => {

    return<Container width={width} bgcolor={bgcolor} color={color}>
        <Content>
        <Image src={url}></Image>
        <Username>{username}</Username>
        </Content>
    </Container>
}

PostAuthorTag.defaultProps = {
    bgcolor:"white",
    color:"black",
    username: "Default Name",
    url: "https://placekeanu.com/26/26"
}

export default PostAuthorTag;