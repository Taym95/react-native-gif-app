import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GifCard} from '../components/Gif';

export const GifDetails = React.memo(({navigation}) => {
  const gif = navigation.getParam('gif');
  return (
    <View style={styles.container}>
      <GifCard gif={gif} />
    </View>
  );
});

GifDetails.navigationOptions = props => ({
  title: props.navigation.getParam('gif').title,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
