import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import MultiImageSlider from '../../comps/MultiImageSlider';



const ExpandedMediaCont = styled.div`
    background-color:#000;
    width:100vw;
    height:100vh;
`;

const CloseImg = styled.div`
padding-left:10px;
padding-top:10px;
`

const Content = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;

const LoadingImg = styled.div`
    margin:250px;
`;


const ExpandedMedia = () => {
 return <div>
    <ExpandedMediaCont>
    <CloseImg onClick={()=>{
                    }}><img src='/Close.png'/></CloseImg>
        <Content>
        
            <LoadingImg onClick={()=>{
                    }}><img src='/ExpandedMedia.png'/></LoadingImg>
            <MultiImageSlider></MultiImageSlider>
        </Content>      
    </ExpandedMediaCont>
   
 </div>
}

ExpandedMedia.defaultProps = {

}

export default ExpandedMedia;