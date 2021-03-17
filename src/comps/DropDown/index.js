import React, { useState } from 'react';
import styled from 'styled-components';

import Arrow from '../../Images/dropdown.png';

const Container = styled.div`
margin:10px;
`;

const Button = styled.div`
width:126px;
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
margin-top:10px;
background-color:white;
padding:10px;
width:140px;
border-radius:10px;
-webkit-box-shadow: 0px 7px 17px 6px rgba(0,0,0,0.16); 
box-shadow: 0px 7px 17px 6px rgba(0,0,0,0.16);
position:absolute;
`;

const Image = styled.img`
position:relative;
left:35px;
`;

const DropDown = ({}) => {

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
          All
        <Image style={{transform: open == true ? "rotate(0deg)" : "rotate(-90deg)"}} src={Arrow}></Image>
      </Button>
      <Box style={{display: open == true ? "block" : "none"}}>
          <Topic>Graphic Design</Topic>
          <Topic>Illustration</Topic>
          <Topic>UI/UX Design</Topic>
          <Topic>Front-end Development</Topic>
      </Box>
    </Container>
}

DropDown.defaultProps = {

}

export default DropDown;