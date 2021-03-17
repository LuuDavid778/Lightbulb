import React, { useState } from 'react';
import styled from 'styled-components';
import UploadImageIcon from '../../Images/uploadimage.png'

const Container = styled.div`
display:flex;
flex-direction:column;
width: 283px;
`;


const Title = styled.text`
font-size: 22px;
color:#7468A7;
font-family: 'Poppins', sans-serif;
`;

const Image = styled.img`
cursor:pointer;
`;

const UploadImage = () => {

    return<Container>
        <Title>Upload Image</Title>
       <Image src={UploadImageIcon}></Image>
    </Container>
}

UploadImage.defaultProps = {
}

export default UploadImage;