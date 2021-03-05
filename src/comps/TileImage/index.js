import React, { useState } from 'react';
import styled from 'styled-components';
import TileButton from '../TileButton';



const Container = styled.div`
min-height:${props => props.tileheight ? props.tileheight : "308px"};   
width:100%;
max-width:${props => props.tilewidth ? props.tilewidth : "344px"};
overflow: hidden;
border-radius: 10px;
display:flex;
align-items:center;
justify-content:center;
`;

const Content = styled.div`
position: absolute;
min-height:${props => props.tileheight ? props.tileheight : "308px"};   
width:100%;
max-width:${props => props.tilewidth ? props.tilewidth : "344px"};
   background: linear-gradient(180deg, rgba(176, 134, 247, 0) 8.85%, #B086F7 100%);
border-radius: 10px;
`;

const TileImage = ({url, width, height}) => {

    return <Container tilewidth={width} tileheight={height}>
        <Content tilewidth={width} tileheight={height}>
        </Content>
        <img src={url}></img>
    </Container>
}

TileImage.defaultProps = {
    url: "https://placekeanu.com/344/308",
    width:"344px",
    height:"308px"
}

export default TileImage;