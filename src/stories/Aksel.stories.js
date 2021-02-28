import React from 'react';

import FormInput from '../comps/FormInput';
import FormDesc from '../comps/FormDesc';
import LoginInput from '../comps/LoginInput';
import LoginPass from '../comps/LoginPass';

export default {
  title: 'Aksel',
};

export const InputForm = () => <FormInput />
export const DescForm = () => <FormDesc />
export const InputLogin = () => <LoginInput />
export const PassLogin = () => <LoginPass />