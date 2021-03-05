import React, { useState } from 'react';
import styled from 'styled-components';
import TileButton from '../TileButton';
import TileImage from '../TileImage';
import PostAuthorTag from '../PostAuthorTag';


const Container = styled.div`
overflow:hidden;

`;

const ButtonDiv = styled.div`
display:flex;
align-items:center;
justify-content:center;
position:relative;
max-width:140px;
left:195px;
bottom:70px;
`;


const HeaderDiv = styled.div`
display:flex;
flex-direction:column;
position: relative;
bottom:80px;
left:15px;
width:300px;
overflow:hidden;    

`;

const Header = styled.div`
font-size:20px;
color:white;
`;

const Category = styled.div`
font-size:13px;
color:#67FCF3;
`;

const HeaderTag = styled.div`
position:relative;
bottom:340px;
left:110px;
`;

const PostHomeTile = ({title, category, url}) => {

    return <Container>
      <TileImage width="244px" url={url}></TileImage>
      <HeaderDiv>
    <Header>{title}</Header>
    <Category>{category}</Category>
    </HeaderDiv>
      <HeaderTag>
<PostAuthorTag></PostAuthorTag>
</HeaderTag>
    </Container>
}

PostHomeTile.defaultProps = {
title:"Default Post Title",
category: "Default Category",
url:"https://placekeanu.com/344/308"
}

export default PostHomeTile;