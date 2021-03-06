import React from 'react';
import styled from 'styled-components';
import InputLogin from '../LoginInput';




const Container = styled.div`

`;

const SignupPrompt = styled.p`
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
text-decoration-line: underline;
cursor: pointer;
color: #B086F7;
`;





const Login = ({onClick}) => {
    return<Container>
   <InputLogin title="USERNAME" placeholder="Type your username..."></InputLogin>
   <InputLogin title="PASSWORD" placeholder="********"></InputLogin>
   {/* Link to signup */}
   <SignupPrompt>Don't have an account? Create one.</SignupPrompt>
   
    </Container>
}


Login.defaultProps = {

}

export default Login; 