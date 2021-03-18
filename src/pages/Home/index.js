import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import TopBar from '../../comps/Header';
import NavBar from '../../comps/NavBar';
import PostHomeTile from '../../comps/PostHomeTile';
import DropDown from '../../comps/DropDown';

const Footer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const ContentContainer = styled.div`
margin-left:10px;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 10px;
`;

const DropDownContainer = styled.div`
position:absolute;
top:165px;
`;

const Title = styled.p`
font-size:24px;
text-align:center;
margin-bottom:100px;
`;

const Home = () => {

    const [allPosts, setallPosts] = useState([]);
    const [subjectNum, setSubjectNum] = useState(0);

    var TheSubject = "";

    const HandleSelected = async (selected) => {
        setSubjectNum(selected)
    }

    const GetPosts = async () => {
        var resp = await axios.get("http://localhost:8080/api/allPosts");
        var arr = resp.data.posts;
        setallPosts(arr);
        console.log(arr)
      }

    useEffect(()=>{
        GetPosts();
    },[])
    
    return <div>
        <TopBar></TopBar>
        <Title>Frontend Development</Title>
        <ContentContainer>
                {allPosts.map(o=>{
                        if (o.Subject === 1){
                            TheSubject = "Frontend Development";
                        } else if (o.Subject === 2){
                            TheSubject = "Backend Development";
                        }  else if (o.Subject === 3){
                            TheSubject = "UI/UX Design";
                        }  else if (o.Subject === 4){
                            TheSubject = "Graphic Design";
                        }  else if (o.Subject === 5){
                            TheSubject = "Illustration";
                        }
                    if (subjectNum === 0){
                        return <div>
                    <PostHomeTile
                    link={"/post/"+o.id}
                    title={o.Title}
                    category={TheSubject}
                    url={"url("+o.img+")"}
                    id={o.id}
                    />
                    </div>
                    }
                    else if (o.Subject === subjectNum){
                    return <div>
                    <PostHomeTile
                    link={"/post/"+o.id}
                    title={o.Title}
                    category={TheSubject}
                    url={"url("+o.img+")"}
                    id={o.id}
                    />
                    </div>
                    } else {
                    return
                    }
                    })}
        </ContentContainer>
        <DropDownContainer>
        <DropDown
        all={()=>{HandleSelected(0)}}
        frontend={()=>{HandleSelected(1)}}
        backend={()=>{HandleSelected(2)}}
        uiux={()=>{HandleSelected(3)}}
        graphic={()=>{HandleSelected(4)}}
        illustration={()=>{HandleSelected(5)}}
        ></DropDown>
        </DropDownContainer>
        <Footer>
            <NavBar focused={1}></NavBar>
        </Footer>
    </div>
}


Home.defaultProps = {

}

export default Home;