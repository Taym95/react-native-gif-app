import React from 'react';
import {Searchbar} from 'react-native-paper';

// I add react-native-paper because its nice and easy to use UI library
// ps: and also I added it because I contributed to it :)

export const SearchBar = ({value, onChange}) => {
  return (
    <Searchbar
      testID="searchBar"
      placeholder="Search"
      onChangeText={gitName => {
        onChange(gitName);
      }}
      value={value}
    />
  );
};
