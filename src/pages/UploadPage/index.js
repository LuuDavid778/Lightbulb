import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import BackButton from '../../comps/BackButton';
import FormInput from '../../comps/FormInput'
import UploadImage from '../../comps/UploadImage';
import Button from '../../comps/Button';
import FormDropDown from '../../comps/FormDropDown';

export default function UploadPage(){
    return <div className="uploadpage">
        <div className="uploadpage_header">
          <div className="uploadpage_backbutton"><BackButton></BackButton></div>
        </div>
        <h2>Upload Post</h2>

    <div className="form">
    <FormInput title="Title" placeholder="Title of Post" width="264px" height="30px" ></FormInput>
    <div className="form_dropdown">
        <h3>Category</h3>
    <FormDropDown></FormDropDown>
    </div>
    <FormInput title="Description" placeholder="Write your Description here..." width="264px" height="106px" ></FormInput>
    <div className="uploadpage_uploadimage">
       <UploadImage></UploadImage>
    </div>

    </div>

    <div className="uploadpage_buttondiv">
        <Button></Button>
        <Button color="#B086F7" bgcolor="white" text="Cancel"></Button>
    </div>


    </div>

}

UploadPage.defaultProps = {
}