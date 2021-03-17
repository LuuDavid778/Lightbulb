import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import BackButton from '../../comps/BackButton';
import FormInput from '../../comps/FormInput'
import UploadImage from '../../comps/UploadImage';

export default function UploadPage(){
    return <div className="uploadpage">
        <div className="uploadpage_header">
          <div className="uploadpage_backbutton"><BackButton></BackButton></div>
        </div>
        <h2>Upload Post</h2>

    <div className="form">
    <FormInput title="Title" placeholder="Title of Post" width="264px" height="30px" ></FormInput>
    <FormInput title="Tags" placeholder="Title of Post" width="264px" height="30px" ></FormInput>
    <FormInput title="Description" placeholder="Write your Description here..." width="264px" height="106px" ></FormInput>
    <div className="uploadpage_uploadimage">
       <UploadImage></UploadImage>
    </div>
    </div>
    
    </div>

}

UploadPage.defaultProps = {
}