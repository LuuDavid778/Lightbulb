import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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
    return <div>
        <TopBar></TopBar>
        <Title>Frontend Development</Title>
        <ContentContainer>
                <PostHomeTile></PostHomeTile>
                <PostHomeTile></PostHomeTile>
                <PostHomeTile></PostHomeTile>
                <PostHomeTile></PostHomeTile>
                <PostHomeTile></PostHomeTile>
                {/* Code for mapping out each of the posts later on */}

                {/* {post.map(o=>{
                    if (o.category === "frontend"){
                    return <div>
                    <PostHomeTile
                    link={"/post/"+o.id}
                    title={o.title}
                    category={o.category}
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
        <DropDown></DropDown>
        </DropDownContainer>
        <Footer>
            <NavBar focused={1}></NavBar>
        </Footer>
    </div>
}

Home.defaultProps = {

}

export default Home;