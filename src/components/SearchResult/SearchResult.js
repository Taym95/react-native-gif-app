import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GifGrid} from '../Gif';

const styles = StyleSheet.create({
  searchResult: {
    paddingTop: 20,
  },
});

export const SearchResult = React.memo(({gifs, navigation}) => {
  return (
    <View styles={styles.searchResult} testID="gifGrid">
      <GifGrid gifs={gifs} navigation={navigation} />
    </View>
  );
});
