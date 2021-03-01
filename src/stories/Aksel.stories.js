import React from 'react';

import FormInput from '../comps/FormInput';
import FormDesc from '../comps/FormDesc';
import LoginInput from '../comps/LoginInput';
import LoginPass from '../comps/LoginPass';
import NavBar from '../comps/NavBar';
import MultiImageSlider from '../comps/MultiImageSlider';
import NextButton from '../comps/NextButton';
import Backbutton from '../comps/BackButton';

import BackW from '../Images/back-w.png';
import BackB from '../Images/back-b.png';

import NextW from '../Images/next-w.png';

export default {
  title: 'Aksel',
};

export const InputForm = () => <FormInput />
export const DescForm = () => <FormDesc />
export const InputLogin = () => <LoginInput />
export const PassLogin = () => <LoginPass />
export const NavigationBar = () => <NavBar />
export const MultipleImageSlider = () => <MultiImageSlider />
export const ButtonNext = () => <NextButton Arrow={NextW}/>
export const ButtonBack = () => <Backbutton Arrow={BackW}/>
