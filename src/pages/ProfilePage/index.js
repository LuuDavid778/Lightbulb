import React, {useState, useEffect} from 'react'
import axios from "axios";
import styled from 'styled-components';
import BackButton from '../../comps/BackButton';
import './ProfilePage.scss';
import MyPostTile from '../../comps/MyPostTile'
import NavBar from '../../comps/NavBar';
import {useHistory, useLocation} from 'react-router-dom';
const EditButton = styled.button`
width:100%;
max-width: 87px;
height: 31px;
border:none;
outline:none;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
cursor:pointer;
color:#7468A7;
font-family:Poppins;
`;


const Footer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

// get joe's help with mapping user's profile
export default function ProfilePage({pfp}){
    const [myPosts, setMyPost] = useState([])
    const [user, setUser] = useState({})
    const location = useLocation();
    const history = useHistory();

    const HandleMyUser = async() => {
      let resp = await axios.get(`http://localhost:8080/api/myUser`)
      console.log("user",resp.data.user[0])
      setUser(resp.data.user[0])
    
    }

    const HandleMyPosts = async() => {
      let resp = await axios.get(`http://localhost:8080/api/myPosts`)
      console.log(resp.data.posts)
      setMyPost(...[resp.data.posts])
    
    }
    const CheckToken = async () => {
      const token = await sessionStorage.getItem("token");
      console.log("token", token);
      if(token){
        // add beAR TOKEN
          axios.defaults.headers.common['Authorization'] = "Bearer " + token;
      } else{
          history.push("/welcome");
      }
  }

  const handleDelete = async (o) =>{
    let resp = await axios.delete("http://localhost:8080/api/deletePost/" + o.id)
    HandleMyUser();
    HandleMyPosts();
  }

    useEffect(()=>{
      CheckToken();
     HandleMyUser();
     HandleMyPosts();
    }, [])


    return <div className="app">
        <div className="headerdiv">
          {/* <div className="backbutton"><BackButton BgColor="white"></BackButton></div> */}
          <div className="header"><h2>My Profile</h2></div>
          <div className="user">
            <img className="profilepicture" src={pfp}></img>
            <div className="profile-subdiv">
            <h3>{user.Username}</h3>
            <EditButton>Edit Profile</EditButton>
            </div>
          </div>    
        </div>


        <h3 className="content-header">My Posts</h3>
      <div className="content">
        {myPosts && myPosts.map(o => <MyPostTile display="none"
        title={o.Title}
        url={o.ImageURL}      
        category={o.Category}
        onClick={()=>{
          history.push("/post/" + o.id)
        }}
        onClickEdit={()=>{
          history.push('/edit',{params: o})
        }}
        onClickDelete={()=>{
          handleDelete(o)
        }}
        /> )}
        
      </div>

      <Footer>
<NavBar focused={3}></NavBar>
</Footer>

        </div>




}

ProfilePage.defaultProps = {
  pfp:"https://placekeanu.com/69/69",
  username:"Username"
}