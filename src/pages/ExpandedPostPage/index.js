import React, {useState, useEffect} from 'react'
import axios from "axios";
import styled from 'styled-components';
import './ExpandedPostPage.scss';

import BackButton from '../../comps/BackButton';
import SkillTag from '../../comps/SkillTag';
import PostCaption from '../../comps/PostCaption';
import CommentPrompt from '../../comps/CommentPrompt'
import Comment from '../../comps/Comment';


    export default function ExpandedPostPage(){
        return<div className="expandedpostpage">
            <div id="header">
                <img className="postimage"  src="http://placekeanu.com/375/308"></img>
            </div>
            <div id="content">
                <div id="content-header">Default Post Name</div>
                <div className="skill"><SkillTag></SkillTag></div>
                <div className="postcaption"><PostCaption/></div>
                <div className="commentprompt"><CommentPrompt></CommentPrompt></div>
                <div className="comments">
                    <Comment></Comment>
                </div>
            </div>

        </div>

    }