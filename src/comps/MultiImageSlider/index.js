import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const NavWrapper = styled.div`
`;

const NavBG = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavItem = styled.div`
  border-radius: 50%;
  color: #000000;
  border: 2px solid #B086F7;
  width:12px;
  height:12px;
`;

const MultiImageSlider = ({focused}) => {
    const [focusedTab, setFocusedTab] = useState(0);

    const pageNumber = () => {
      setFocusedTab(focused);
    }

    useEffect(() => {
      pageNumber();
  },[]);

  //B086F7
  //12x12

    return <NavWrapper>
        <NavBG>
            {/* <Link to="/home"> */}
              <NavItem style={{backgroundColor: focusedTab == 1 ? "#B086F7" : ""}} onClick={() => {setFocusedTab(1)}}></NavItem>
            {/* </Link>
            <Link to="/create-post"> */}
              <NavItem style={{backgroundColor: focusedTab == 2 ? "#B086F7" : ""}} onClick={() => {setFocusedTab(2)}}></NavItem>
            {/* </Link>
            <Link to="/profile"> */}
              <NavItem style={{backgroundColor: focusedTab == 3 ? "#B086F7" : ""}} onClick={() => {setFocusedTab(3)}}></NavItem>
            {/* </Link> */}
        </NavBG>
    </NavWrapper>
}

MultiImageSlider.defaultProps = {

}

export default MultiImageSlider;