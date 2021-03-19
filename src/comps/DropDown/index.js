import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
transition:0.2s;
`;

const DropDown = ({selected, all, frontend, backend, uiux, graphic, illustration}) => {

    const [allSubjects, setallSubjects] = useState([]);
    const [current, setCurrent] = useState(1);
    const [open, setOpen] = useState(false);

    const HandleDropDown = () => {
        if (open === false){
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    // const GetSubjects = async () => {
    //     var resp = await axios.get("http://localhost:8080/api/allSubjects");
    //     var arr = resp.data.subjects;
    //     setallSubjects(arr);
    //     console.log(arr)
    //   }

    useEffect(() => {
        // GetSubjects();
    },[]);

    return <Container>
      <Button onClick={HandleDropDown}>
          All
        <Image style={{transform: open == true ? "rotate(0deg)" : "rotate(-90deg)"}} src={Arrow}></Image>
      </Button>
      <Box style={{display: open == true ? "block" : "none"}}>
          <Topic onClick={all}>All</Topic>
          <Topic onClick={frontend}>Frontend Development</Topic>
          <Topic onClick={backend}>Backend Development</Topic>
          <Topic onClick={uiux}>UI/UX Design</Topic>
          <Topic onClick={graphic}>Graphic Design</Topic>
          <Topic onClick={illustration}>Illustration</Topic>
      {/* {allSubjects.map(o=>{
                    return <Topic onClick={current == o.id} onClick={()=>{setCurrent(selected);}}>{o.Title}</Topic>
                    })} */}
      </Box>
    </Container>
}

DropDown.defaultProps = {

}

export default DropDown;