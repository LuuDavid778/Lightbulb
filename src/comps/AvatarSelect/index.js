import React from 'react';
import styled from 'styled-components';
import Avatar1 from '../../Images/Avatar1.png';
import SelectedIcon from '../../Images/SelectedIcon.svg';



const Container = styled.div`

`;

const AvatarImg = styled.img`
width:100px;
height:100px;
cursor:pointer;
`;

const Checkmark = styled.img`
width:25px;
height:25px;
display:flex;
position:relative;
top:-100px;
left:80px;

`;



const AvatarSelect = ({onClick}) => {
    return<Container>
    
        <AvatarImg src={Avatar1}></AvatarImg> 
        <Checkmark src={SelectedIcon}></Checkmark>
   
    </Container>
}


AvatarSelect.defaultProps = {

}

export default AvatarSelect; 