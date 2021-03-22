import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
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
    const history = useHistory();
    const [allPosts, setallPosts] = useState([]);
    const [subjectNum, setSubjectNum] = useState(0);
    const [obj, setObj] = useState([]);
    const [search, setSearch] = useState("");

    var TheSubject = "";

    const HandleSelected = async (selected) => {
        setSubjectNum(selected)
    }

    const GetPosts = async () => {
        var resp = await axios.get("http://localhost:8080/api/allPosts");
        var arr = resp.data.posts;
        setallPosts(arr);
        setObj(arr);
        console.log(arr)
      }

      const CheckToken = async () => {
        const token = await sessionStorage.getItem("token");
        console.log("token", token);
        if(token){
            axios.defaults.headers.common['Authorization'] = token;
        } else{
            history.push("/login");
        }
    }

    const FilterTitle = (e)=>{
        setObj(
          allPosts.filter((n)=>{
              return n.Title.includes(e)
          })
        )
      }

    
    
    useEffect(()=>{
        CheckToken();
        GetPosts();
    },[])
    
    return <div>
        <TopBar placeholder="Search Posts" onChange={(e)=>{
            setSearch(e.target.value)
            FilterTitle(search);
        }}></TopBar>
        <Title>Frontend Development</Title>
        <ContentContainer>

        {obj && obj.map(o => <PostHomeTile display="none"
        title={o.Title}
        url={o.ImageURL}      
        category={o.Category}
        username={o.Username}
        pfpurl={o.ProfileImg}
        onClick={()=>{
          history.push("/post/" + o.id)
        }}
        /> )}



                {/* {allPosts.map(o=>{
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
                    })} */}
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