import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const LoadingCont = styled.div`
    background-color:#B086F7;
    width:100vw;
    height:100vh;
`;

const LogoCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height:100%;
`;

const LoadingImg = styled.div`

`;

const Loading = () => {
 return <div>
    <LoadingCont>
        <LogoCont>
            <LoadingImg onClick={()=>{
                    }}><img src='/LandingLogo.png'/></LoadingImg>
        </LogoCont>
    </LoadingCont>
   
 </div>
}

Loading.defaultProps = {

}

export default Loading;