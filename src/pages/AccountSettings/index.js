import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import BackButton from '../../comps/BackButton';
import BackArrow from '../../Images/back-w.png';
import AvatarSelect from '../../comps/AvatarSelect';
import FormInput from '../../comps/FormInput';
import Button from '../../comps/Button';
import NavBar from '../../comps/NavBar';
import axios from 'axios';

const Title = styled.p`
color:#7468A7;
font-size:22px;
font-weight:${props=>props.weight ? props.weight : ""};
`;

const TitleCont = styled.div`
display:flex;
justify-content:center;
`;

const BackCont = styled.div`
margin-left:10pt;
margin-top:10pt;
`;

const MainContent = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

const ButtonCont = styled.div`
position:fixed;
bottom:200pt;
display:flex;
justify-content:space-evenly;
width:100vw;
`;


const AccountSettings = () => {
    const [username, setUsername]= useState("");
    const [user, setUser] = useState({})
    const history = useHistory();
    const HandleMyUser = async() => {
        let resp = await axios.get(`http://localhost:8080/api/myUser`)
        console.log("user",resp.data.user[0])
        setUser(resp.data.user[0])
      
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


    const handleNameChange = async () => {
        let resp = await axios.patch("http://localhost:8080/api/updateUser", {Username:username})
        console.log(resp.data);
        HandleMyUser();
    }


    useEffect(()=>{
        CheckToken();
        HandleMyUser();
    },[])
 return <div>
  
    <TitleCont>
        <Title weight="600">Account Settings</Title>
    </TitleCont>
    <MainContent>
        <Title>Edit Profile</Title>
        <div className="accountsetting_username">{user.Username}</div>
        <AvatarSelect Check="none"></AvatarSelect>
        <FormInput onChange={(e)=>{setUsername(e.target.value)}}title="Change Username" placeholder="Username"></FormInput>
    </MainContent>
    <ButtonCont>
        <Button onClick={handleNameChange}width="250px"></Button>
    </ButtonCont>
    <div className="accountsetting_footer">
<NavBar focused={4}></NavBar>
</div>

 </div>
}

AccountSettings.defaultProps = {

}

export default AccountSettings;