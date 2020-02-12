import React from 'react';
import {FlatList} from 'react-native';
import {GifGridItem} from './GifGridItem';

export const GifGrid = React.memo(({gifs, navigation}) => {
  const showGifDetail = gif => {
    navigation.navigate('GifDetails', {
      gif: gif,
    });
  };

  const renderItems = ({item}) => (
    <GifGridItem gif={item} onPress={showGifDetail} />
  );
  return (
    <FlatList
      data={gifs}
      renderItem={renderItems}
      numColumns={2}
      keyExtractor={(gif, index) => gif.id}
    />
  );
});
