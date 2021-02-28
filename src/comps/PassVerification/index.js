import React from 'react';
import styled from 'styled-components';

const MustItem = styled.div`
position: relative;
width: 15em;
height: 1em;
padding: 0.2em 0;
border-bottom: 0.1em solid #073B4C;
background-color: #DAF3FC;
`;

const MustText = styled.li`
position: absolute;
z-index: 0;
top: 0.6em;
left: 1em;
width: 100%;
padding: 0;
margin: 0;
line-height: 0;
`;

const MustContainItem = props => {
    const { data } = props
    const label = data[0] // name of item
    const meetsReq = data[1] // boolean of whether or not req is satisfied

    // returns string of classes based on props aliased meetsReq
    const setClass = () => {
        const classArr = ["must-line"]
        if (meetsReq) classArr.push('cross-out')
        return classArr.join(' ')
    }

    return (
        <MustItem>
            <MustText>{label}</MustText>
            <div className={setClass()}></div>
        </MustItem>
  );
}

export default MustContainItem;