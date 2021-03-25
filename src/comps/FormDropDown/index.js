import React, { useState } from 'react';
import styled from 'styled-components';

import Arrow from '../../Images/dropdown.png';

const Container = styled.div`
display:flex;

`;

const Button = styled.div`
width:264px;
height:36px;
display:flex;
align-items:center;
color:white;
background-color:#B38BF6;
border-radius:20px;
justify-content:center;

`;

const Topic = styled.div`
padding:5px;
`;

const Box = styled.div`
margin-top:40px;
background-color:white;
padding:10px;
width:240px;
border-radius:10px;
-webkit-box-shadow: 0px 7px 17px 6px rgba(0,0,0,0.16); 
box-shadow: 0px 7px 17px 6px rgba(0,0,0,0.16);
position:absolute;

`;

const Image = styled.img`
position:absolute;
right:10px;
`;

const Label = styled.div`
position:relative;
text-align:left;
font-weight:500;

`;


const FormDropDown = ({category, setCat}) => {

    const HandleDropDown = () => {
        if (open === false){
            setOpen(true)
        } else {
            setOpen(false)
        }
        }

    const [open, setOpen] = useState(false);


    return <Container>
      <Button onClick={HandleDropDown}>
          <Label>{category}</Label>
        <Image style={{transform: open == true ? "rotate(0deg)" : "rotate(-90deg)"}} src={Arrow}></Image>
      </Button>
      <Box style={{display: open == true ? "block" : "none"}}>
          <Topic onClick={()=>{ 
              setCat("Graphic Design")
              setOpen(false);
          }}>Graphic Design</Topic>
          <Topic onClick={()=>{ 
              setCat("Illustration")
              setOpen(false);

          }}>Illustration</Topic>
          <Topic onClick={()=>{ 
              setCat("UI/UX Design")
              setOpen(false);

          }}>UI/UX Design</Topic>
          <Topic onClick={()=>{ 
              setCat("Front-end Development")
              setOpen(false);

          }}>Front-end Development</Topic>
      </Box>
    </Container>
}

FormDropDown.defaultProps = {

}

export default FormDropDown;