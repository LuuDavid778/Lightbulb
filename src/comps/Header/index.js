import React from 'react';
import styled from 'styled-components';
import SearchBar from '../SearchBar';


const TopBarContainer = styled.div`
   display:flex;
   align-items:center;
   justify-content: center;
   background-color:${props=>props.bgcolor ? props.bgcolor : "#B086F7"};
   width:${props=>props.width ? props.width : "375px"};
   height:${props=>props.height ? props.height : "83px"};
   border-radius:0 0 18px 18px;
`;


const HeaderLogoImg = styled.img`
    width:60px;
    height:60px;
    background-size:cover;
    object-fit:cover;
    margin-left:10px;
`;


const TopBar = ({bgimg, width, height, placeholder}) => {

    return <TopBarContainer width={width} height={height}>
            <SearchBar placeholder={placeholder}> </SearchBar>
            <HeaderLogoImg src={bgimg}></HeaderLogoImg>     
        </TopBarContainer>
}

TopBar.defaultProps = {
    bgimg : "./headerlogo.png",
    placeholder:"Default Placeholder"
}

export default TopBar;