import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
display:flex;
align-items:center;
width:${props=>props.width ? props.width : "256px"};
height:${props=>props.height ? props.height : "35px"};
background-color:#FDFDFD;
border-radius:17px;
`;

const SearchImg = styled.div`
margin-left:15px;
`;

const TextInput = styled.input`
outline:none;
border:none;
padding-left:10px;
background-color:#FDFDFD;
::placeholder {
    color:#AFAFAF;
}
`;


const SearchBar = ({placeholder, width, height}) => {

    return<Container width={width} height={height}>
         <SearchImg onClick={()=>{
        }}><img src='/SearchIcon.png'/></SearchImg>
        <TextInput type='text' placeholder={placeholder} />
    </Container>
}

SearchBar.defaultProps = {
    placeholder:"Default Placeholder"
}

export default SearchBar;

