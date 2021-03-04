import React, {useState} from 'react';
import styled from 'styled-components';
import HeartLike from '../../Images/heart.svg'



const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:74px;
height:30px;
background-color:#FFFFFF;
border-radius:53px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
font-family: 'Poppins', sans-serif;
font-size:14px;
`;

const Likebutton = styled.img`
cursor:pointer;
width:14pt;
height:17pt;
backgroundColor: white;

`;

const TextCont = styled.div`
margin:5pt;
`;



const LikeTag = ({LikeClick, LikeLogo, LikeNumber}) => {
    const [likePost, setlikePost] = useState(0);

const toggleLikePost = () => {
    console.log("Liked")
    setlikePost(0);
  };
    return<Container >
        <Likebutton src={HeartLike}  style={{backgroundColor: likePost === active ? "red" : ""}} onClick={() => {toggleLikePost(true)}}></Likebutton>
        <TextCont>{LikeNumber}</TextCont>
    </Container>
}


LikeTag.defaultProps = {
    LikeNumber: 120,
    LikeLogo: "./ReactLogo.png",
}

export default LikeTag; 