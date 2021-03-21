import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import BackButton from '../../comps/BackButton';
import FormInput from '../../comps/FormInput'
import UploadImage from '../../comps/UploadImage';
import Button from '../../comps/Button';
import FormDropDown from '../../comps/FormDropDown';
import {useHistory} from 'react-router-dom';

export default function EditPage(){
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("")
    const [category, setCat] = useState("Category")
    const [img, setImg] = useState()

    const handleUpload = async event => {
        event.preventDefault()
        console.log(title)

        const data = new FormData()
        data.append("Image", img)
        data.append('Title', title)
        data.append("Description", desc)
        data.append("Category", category)

        let resp = await axios.post("http://localhost:8080/api/updatePost/", data)
        console.log(resp.data)
    }



    return <div className="EditPage">
        <div className="EditPage_header">
          <div className="EditPage_backbutton"><BackButton></BackButton></div>
        </div>
        <h2>Edit Post</h2>

    <div className="form">
    <FormInput title="Title" placeholder="Title of Post" width="264px" height="30px" ></FormInput>
    <div className="form_dropdown">
        <h3>Category</h3>
    <FormDropDown></FormDropDown>
    </div>
    <FormInput title="Description" placeholder="Write your Description here..." width="264px" height="106px" ></FormInput>
    <div className="EditPage_uploadimage">
       <UploadImage></UploadImage>
    </div>

    </div>

    <div className="EditPage_buttondiv">
        <Button text="Save"></Button>
        <Button color="#B086F7" bgcolor="white" text="Cancel"></Button>
    </div>


    </div>

}

EditPage.defaultProps = {
}