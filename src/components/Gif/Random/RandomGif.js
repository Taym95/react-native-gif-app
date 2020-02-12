import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {GifCard} from '../GifCard';
import {useFetchRandomGif} from '../../../customHooks';

export const RandomGif = React.memo(props => {
  const gif = useFetchRandomGif();
  return (
    <View style={styles.container} testID="randomGif">
      <Text>Random selected GIF:</Text>
      <GifCard gif={gif} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
});
