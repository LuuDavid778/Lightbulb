import React from 'react';
import styled from 'styled-components';



const LandingLogoimg = styled.img`
    width:189px;
    height:204px;
    background-size:cover;
    // object-fit:cover;
`;


const LandingLogo = ({bgimg}) => {

    return <LandingLogoimg src={bgimg}></LandingLogoimg>     
        
}

LandingLogo.defaultProps = {
    bgimg : "./purplelandinglogo.png",
    
}

export default LandingLogo;