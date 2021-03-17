import React, { useState } from 'react';
import styled from 'styled-components';
import TileButton from '../TileButton';
import TileImage from '../TileImage';
import PostAuthorTag from '../PostAuthorTag';

import LikeTag from '../../comps/LikeTag';


const Container = styled.div`
display: inline-block;
align-items:center;
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
bottom:60px;
width:165px;
overflow:hidden;
`;

const Header = styled.div`
font-size:14px;
color:white;
`;

const Category = styled.div`
font-size:12px;
color:#67FCF3;
`;

const HeaderTag = styled.div`
position:relative;
bottom:230px;
left:20px;
max-width:130px;
`;

const LikeContainer = styled.div`
position:relative;
top:-90pt;
left:65pt;
`;

const PostHomeTile = ({title, category, url}) => {

    return <Container>
      <TileImage width="165px" height="208px" imageheight="208px" url={url}></TileImage>
      <HeaderDiv>
    <Header>{title}</Header>
    <Category>{category}</Category>
    </HeaderDiv>
      <HeaderTag>
<PostAuthorTag></PostAuthorTag>
</HeaderTag>
{/* <LikeContainer>
  <LikeTag></LikeTag>
</LikeContainer> */}
    </Container>
}

PostHomeTile.defaultProps = {
title:"Default Post Title",
category: "Default Category",
url:"https://placekeanu.com/344/308"
}

export default PostHomeTile;