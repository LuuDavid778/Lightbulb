import React from 'react';
import styled, {css} from 'styled-components';

const ButtonContainer = styled.button`
    background-color:${props=>props.bgcolor ? props.bgcolor : "#B086F7"};
    width:${props=> props.width ? props.width : "128px"};
    border-radius: 32px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border:none;
    padding: 0px 45px 0px 45px;
    -webkit-box-shadow: 0px 6px 13px -2px rgba(0,0,0,0.31); 
    box-shadow: 0px 6px 13px -2px rgba(0,0,0,0.31);
`;

const ButtonText = styled.p`
    text-align: center;
    font-size: ${props=>props.fontsize ? props.fontsize : "14px"};
    color:${props=>props.color ? props.color : "#FFF"};
`;


const Button = ({onClick, text, color, bgcolor, fontsize, width, height}) => {
    return <ButtonContainer onClick={onClick} bgcolor={bgcolor} height={height} width={width}>
              <ButtonText fontsize={fontsize} color={color}>{text}</ButtonText>
            </ButtonContainer>
}

Button.defaultProps = {
    text:"Save",
    color:null,
    onClick:()=>{}
    
}

export default Button;