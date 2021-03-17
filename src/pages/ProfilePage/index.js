import React, {useState, useEffect} from 'react'
import axios from "axios";
import styled from 'styled-components';
import BackButton from '../../comps/BackButton';
import './ProfilePage.scss';
import MyPostTile from '../../comps/MyPostTile'

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



export default function ProfilePage({pfp, username}){
    return <div className="app">
        <div className="headerdiv">
          <div className="backbutton"><BackButton BgColor="white"></BackButton></div>
          <div className="header"><h2>My Profile</h2></div>
          <div className="user">
            <img className="profilepicture" src={pfp}></img>
            <div className="profile-subdiv">
            <h3>{username}</h3>
            <EditButton>Edit Profile</EditButton>
            </div>
          </div>
        </div>


        <h3 className="content-header">My Posts</h3>
      <div className="content">
        <MyPostTile></MyPostTile>
        <MyPostTile></MyPostTile>
        <MyPostTile></MyPostTile>
        <MyPostTile></MyPostTile>

      </div>



        </div>

}

ProfilePage.defaultProps = {
  pfp:"https://placekeanu.com/69/69",
  username:"Username"
}