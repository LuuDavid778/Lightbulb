import React, {useState, useEffect} from 'react'
import axios from "axios";
import styled from 'styled-components';
import './ExpandedPostPage.scss';
import {useParams} from 'react-router-dom';
import BackButton from '../../comps/BackButton';
import SkillTag from '../../comps/SkillTag';
import PostCaption from '../../comps/PostCaption';
import CommentPrompt from '../../comps/CommentPrompt'
import Comment from '../../comps/Comment';


    export default function ExpandedPostPage(){

        const params = useParams()
        const [post, setPost] = useState({})
        const [comments, setComments] = useState([])
        const [userComment, setUComment] = useState("")

        const HandlePost = async() =>{
            let resp = await axios.get(`http://localhost:8080/api/singlePost/${params.id}`)
            
            setPost(resp.data.post[0])
            console.log(post)
        }
        

        const GetAllComments = async () => {
            let resp = await axios.get(`http://localhost:8080/api/comments/${params.id}`)
            console.log(resp)
            setComments(...[resp.data.comments])
        }

        
        const PostComment = async () => {
            let resp = await axios.post(`http://localhost:8080/api/createComment/${params.id}`, {Message:userComment})
            console.log(resp.data)
            GetAllComments()
           
        }

        useEffect(()=>{
            HandlePost()
            GetAllComments();
        },[])

        console.log(post)
        console.log(comments);
        return<div className="expandedpostpage">
            <div id="header">
                <img className="postimage"  src={post.ImageURL}></img>
            </div>
            <div id="content">
                <div id="content-header">{post.Title}</div>
                <div className="skill"><SkillTag category={post.Category}></SkillTag></div>
                <div className="postcaption"><PostCaption caption={post.Description}/></div>
                <div className="commentprompt"><CommentPrompt
                 onChange={e=>setUComment(e.target.value)}
                 onClick={PostComment}
                 ></CommentPrompt></div>
                <div className="comments">
                {comments && comments.map(o => <Comment
                username={o.Username}
                comment={o.Message}
                /> )}
                </div>
            </div>

        </div>

    }