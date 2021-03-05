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
color:#FBFF28;
`;

const HeaderTag = styled.div`
position:relative;
bottom:360px;
left:205px;
`;
const MyPostTile = ({title, category, url}) => {

    return <Container>
      <TileImage url={url}></TileImage>
      <HeaderDiv>
    <Header>{title}</Header>
    <Category>{category}</Category>
    </HeaderDiv>
      <ButtonDiv>
         <TileButton hovercolor="#E4E4E4" bgcolor="white" color="black" label="Edit"></TileButton>
         <TileButton hovercolor="#EB4242" label="Delete"></TileButton>
      </ButtonDiv>
      <HeaderTag>
<PostAuthorTag></PostAuthorTag>
</HeaderTag>
    </Container>
}

MyPostTile.defaultProps = {
title:"Default Post Title",
category: "Default Category",
url: "https://placekeanu.com/344/308"
}

export default MyPostTile;