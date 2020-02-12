import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

export const GifGridItem = React.memo(({gif, onPress}) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => onPress(gif)}>
      <Image
        style={styles.gitImage}
        source={{
          uri:
            gif.images.downsized_still.url === ''
              ? 'https://media1.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy-downsized_s.gif?cid=e1bb72ff699d519d1af8337b23faf92b47304273abdfee0b&rid=giphy-downsized_s.gif'
              : gif.images.downsized_still.url,
        }}
      />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  gitImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
