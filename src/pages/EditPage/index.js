import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import BackButton from '../../comps/BackButton';
import FormInput from '../../comps/FormInput'
import UploadImage from '../../comps/UploadImage';
import Button from '../../comps/Button';
import FormDropDown from '../../comps/FormDropDown';
import {useParams, useHistory, useLocation} from 'react-router-dom';


export default function EditPage(){
    const location = useLocation();
    const history = useHistory();
    const myparam = location.state.params;
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("")
    const [category, setCat] = useState("Category")
    const [img, setImg] = useState()

    console.log(myparam.id)


    const handleUpdate = async event => {
        event.preventDefault()
        console.log(title)
        const data = new FormData()
        data.append("Image", img)
        data.append('Title', title)
        data.append("Description", desc)
        data.append("Category", category)
        let resp = await axios.patch(`http://localhost:8080/api/updatePost/` + myparam.id, data)
        console.log(data)
        console.log(resp.data)
        history.push("/myprofile");
    }

    const CheckToken = async () => {
        const token = await sessionStorage.getItem("token");
        console.log("token", token);
        if(token){
          // add beAR TOKEN
            axios.defaults.headers.common['Authorization'] = "Bearer " + token;
        } else{
            history.push("/welcome");
        }
    }
    useEffect(()=>{
        CheckToken();
      }, [])


    return <div className="EditPage">
        <div className="EditPage_header">
         <div className="EditPage_backbutton"><BackButton onClick={()=>{
              history.goBack()
          }}></BackButton></div>
        </div>
        <h2>Edit Post</h2>

    <form className="form" onSubmit={handleUpdate}>
    <FormInput type="text" title="Title" placeholder="Title of Post" width="264px" height="30px" onChange={e=>setTitle(e.target.value)}></FormInput>
    <div className="form_dropdown">
        <h3>Category</h3>
        <FormDropDown
        setCat={(category)=>{
            setCat(category)
        }}
        category={category}
        ></FormDropDown>
    </div>
    <FormInput type="text" title="Description" placeholder="Write your Description here..." width="264px" height="106px"onChange={e=>setDesc(e.target.value)} ></FormInput>
    <div className="EditPage_uploadimage">
       <UploadImage></UploadImage>
       <input id='file-input' type="file" accept="image/*" filename={img} onChange={e=>setImg(e.target.files[0])} ></input>
    </div>

    <div className="EditPage_buttondiv">
        <Button text="Save" type="submit"></Button>
        <Button onClick={()=>{
                history.goBack();
            }}color="#B086F7" bgcolor="white" text="Cancel"></Button>
    </div>

    </form>

   


    </div>

}

EditPage.defaultProps = {
}