import React from 'react';
import styled, {css} from 'styled-components';

const ButtonContainer = styled.button`
    background-color:${props=>props.bgcolor ? props.bgcolor : "#B086F7"};
    border-radius: 32px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border:none;
    padding: 0px 45px 0px 45px;
`;

const ButtonText = styled.p`
    text-align: center;
    font-size: ${props=>props.fontsize ? props.fontsize : "14px"};
    color:${props=>props.color ? props.color : "#FFF"};
`;


const Button = ({text, color, bgcolor, fontsize, width, height}) => {
    return <ButtonContainer bgcolor={bgcolor} height={height} width={width}>
              <ButtonText fontsize={fontsize} color={color}>{text}</ButtonText>
            </ButtonContainer>
}

Button.defaultProps = {
    text:"Save",
    color:null
    
}

export default Button;