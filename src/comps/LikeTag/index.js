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

const Image = styled.img`
cursor:pointer;
width:14pt;
height:17pt;

`;

const TextCont = styled.div`
margin:5pt;
`;



const LikeTag = ({LikeClick, LikeLogo, LikeNumber}) => {
    const [likePost, setlikePost] = useState(false);

const toggleLikePost = () => {
    console.log("Liked")
    setlikePost(likePost ? false : true);
  };
    return<Container >
        <Image src={HeartLike} onClick={toggleLikePost}></Image>
        <TextCont>{LikeNumber}</TextCont>
    </Container>
}


LikeTag.defaultProps = {
    LikeNumber: 120,
    LikeLogo: "./ReactLogo.png",
}

export default LikeTag; 