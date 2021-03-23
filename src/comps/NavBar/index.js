import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Home from '../../Images/home-gray.png';
import HomeC from '../../Images/home-colour.png';

import Add from '../../Images/add-gray.png';
import AddC from '../../Images/add-colour.png';

import Profile from '../../Images/profile-gray.png';
import ProfileC from '../../Images/profile-colour.png';

import Settings from '../../Images/settings-gray.png';
import SettingsC from '../../Images/settings-colour.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";

import {useHistory} from 'react-router-dom';


const NavWrapper = styled.div`
position:fixed;
bottom:20pt;
`;

const NavBG = styled.div`
  width: 343px;
  height: 50px;
  background-color: #FFFFFF;
  border-radius: 43px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
`;

const NavItem = styled.div`
  border: none;
  color: #000000;
  border-radius: 43px;
  width:30px;
    height:30px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
cursor:pointer;
`;

const NavBar = ({focused}) => {
    const [focusedTab, setFocusedTab] = useState(0);
    const history = useHistory();
    const pageNumber = () => {
      setFocusedTab(focused);
    }

    useEffect(() => {
      pageNumber();
  },[]);

    return <NavWrapper>
        <NavBG>
            <Link to="/">
              <NavItem style={{backgroundImage: focusedTab == 1 ? "url(" + HomeC + ")" : "url(" + Home + ")"}} onClick={() => {setFocusedTab(1)}}></NavItem>
           </Link>
            <Link to="/upload">
              <NavItem style={{backgroundImage: focusedTab == 2 ? "url(" + AddC + ")" : "url(" + Add + ")"}} onClick={() => {setFocusedTab(2)}}></NavItem>
            </Link>
              <NavItem style={{backgroundImage: focusedTab == 3 ? "url(" + ProfileC + ")" : "url(" + Profile + ")"}} onClick={() => {
                 history.push("/myprofile")
                setFocusedTab(3)
                  }}></NavItem>
            <Link to="/settings">
              <NavItem style={{backgroundImage: focusedTab == 4 ? "url(" + SettingsC + ")" : "url(" + Settings + ")"}} onClick={() => {setFocusedTab(4)}}></NavItem>
             </Link> 
        </NavBG>
    </NavWrapper>
}

NavBar.defaultProps = {

}

export default NavBar;