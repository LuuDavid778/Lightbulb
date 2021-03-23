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
    const [CategoryTitle, setCategoryTitle] = useState("All");
    const [obj, setObj] = useState([]);
    const [search, setSearch] = useState("");

    var TheSubject = "";

    const HandleSelected = async (selected) => {
        setCategoryTitle(selected)
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
            axios.defaults.headers.common['Authorization'] = "Bearer " + token;
        } else{
            history.push("/welcome");
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
        
        {obj && obj.map(o => {
        if (CategoryTitle === "All"){
            return <PostHomeTile display="none"
        title={o.Title}
        url={o.ImageURL}      
        category={o.Category}
        username={o.Username}
        pfpurl={o.ProfileImg}
        onClick={()=>{
          history.push("/post/" + o.id)
        }}
        />
        }
        else if (o.Category === CategoryTitle){
            return <PostHomeTile display="none"
            title={o.Title}
            url={o.ImageURL}      
            category={o.Category}
            username={o.Username}
            pfpurl={o.ProfileImg}
            onClick={()=>{
              history.push("/post/" + o.id)
            }}
            />
        }
        else {
            return
        }
    })}



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
        all={()=>{HandleSelected("All")}}
        frontend={()=>{HandleSelected("Frontend Development")}}
        backend={()=>{HandleSelected("Backend Development")}}
        uiux={()=>{HandleSelected("UI/UX Design")}}
        graphic={()=>{HandleSelected("Graphic Design")}}
        illustration={()=>{HandleSelected("Illustration")}}
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