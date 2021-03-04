import React from 'react';

import SearchBar from '../comps/SearchBar';
import Button from '../comps/Button';
import InterestsAvatar from '../comps/Interests';
import TopBar from '../comps/Header';



export default {
  title: 'Semi',
};

export const SearchFor = () => <SearchBar />
export const Buttons = () => <Button />
export const InterestsBoxes = () => <InterestsAvatar />
export const PurpleHeader = () => <TopBar />