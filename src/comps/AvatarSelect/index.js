import React from 'react';
import styled from 'styled-components';
import Avatar1 from '../../Images/Avatar1.png';
import SelectedIcon from '../../Images/SelectedIcon.svg';



const Container = styled.div`
max-height:60px;
margin:40px;
`;

const AvatarImg = styled.img`
width:100px;
height:100px;
cursor:pointer;
border-radius:50px;

`;

const Checkmark = styled.img`
display:${props=>props.Check ? props.Check : "block"};
width:25px;
height:25px;
position:relative;
top:-100px;
left:80px;

`;



const AvatarSelect = ({onClick, Check, img}) => {
    return<Container onClick={onClick}>
        <AvatarImg src={img}></AvatarImg> 
        <Checkmark Check={Check} src={SelectedIcon}></Checkmark>
    </Container>
}


AvatarSelect.defaultProps = {
img: Avatar1
}

export default AvatarSelect; 