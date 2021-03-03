import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
display:flex;
align-items:center;
width:263px;
height:35px;
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


const SearchBar = ({input, placeholder}) => {

    return<Container>
         <SearchImg onClick={()=>{
        }}><img src='/SearchIcon.png'/></SearchImg>
        <TextInput type='text' placeholder={placeholder} />
    </Container>
}

SearchBar.defaultProps = {
    placeholder:"Default Placeholder"
}

export default SearchBar;

// import React, {useState, useEffect} from 'react';
// import styled from 'styled-components';


// const SearchBox = styled.div`
//     display:flex;
//     justify-content:center;

// `;

// const SearchImg = styled.div`
//     margin-left:10px;
// `;

// const SearchInput = styled.input`
//     width: 270px;
//     height: 35px;
//     background-color: #ECECEC;
//     border-radius: 20px;
//     border:none;
//     padding-left:20px;
// `;


// const SearchBar = ({input, onClick}) => {

//     return 
//     <SearchBox>
//         <SearchImg onClick={()=>{
//         }}><img src='/SearchIcon.png'/></SearchImg>
      
//         <SearchInput onChange={(e)=>{
//             input(e.target.value)
//         }} 
//         type="text" placeholder="Search for posts..." onClick={()=>{
//             }}>
//         </SearchInput>
//     </SearchBox>;
// }

// export default SearchBar;


