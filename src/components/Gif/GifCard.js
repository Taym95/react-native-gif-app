import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export const GifCard = React.memo(({gif}) => {
  // somehow I could not found age restriction in giphy API
  // I will use the rating instead
  // https://media1.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif?cid=e1bb72ff699d519d1af8337b23faf92b47304273abdfee0b&rid=giphy.gif
  return (
    <>
      <Image
        style={styles.gifImg}
        source={{
          uri: gif
            ? gif.images.downsized_large.url
            : 'https://media1.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif?cid=e1bb72ff699d519d1af8337b23faf92b47304273abdfee0b&rid=giphy.gif',
        }}
      />
      <View style={styles.gifDetail}>
        <View>
          <Text style={styles.title}>{gif ? gif.title : 'Title'}</Text>
          <Text style={styles.title}>{gif ? gif.bitly_url : 'URL'}</Text>
        </View>
        <Text style={styles.title}>Rating: {gif ? gif.rating : ''}</Text>
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  gifImg: {
    width: 400,
    height: 400,
  },
  gifDetail: {flex: 1, flexDirection: 'row', justifyContent: 'space-between'},
  title: {
    padding: 20,
    fontWeight: 'bold',
  },
});
