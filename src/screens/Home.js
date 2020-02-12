import React, {useState, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {debounce} from 'lodash';
import {SearchBar} from '../components/SearchBar';
import {SearchResult} from '../components/SearchResult';
import {RandomGif} from '../components/Gif';
import {seachByName} from '../api';

// I usually user redux with redux-saga for the big apps and centralized state.
// But we don't need to install another library since react has build-in hooks
// for managing state
// but I can easily re-implement it with redux
const reducer = (state, {type, gifs}) => {
  switch (type) {
    case 'LOAD_GIFS':
      return {
        gifs,
      };
    default:
      return state;
  }
};
export const Home = React.memo(props => {
  const initialState = {
    gifs: [],
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [searchInput, setSearchInput] = useState('');
  const loadData = response => {
    dispatch({
      type: 'LOAD_GIFS',
      gifs: response.data,
    });
  };
  const search = text => {
    seachByName(text)
      .then(response => loadData(response))
      .catch(function(error) {
        // handle fetch data error
        // of course, we can do better than logging or throwing an error
        // we can show a not found screen
        // or if we are using sentry we can send the error to sentry
        // I will just log and throw an error
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        throw error;
      });
  };

  const handlerSearch = useCallback(debounce(search, 3000), []);
  const onChange = text => {
    setSearchInput(text);
    if (text.length >= 2) {
      handlerSearch(text);
    }
  };
  return (
    <View style={styles.app}>
      <SearchBar value={searchInput} onChange={onChange} />
      {searchInput.length < 2 ? (
        <RandomGif />
      ) : (
        <SearchResult gifs={state.gifs} navigation={props.navigation} />
      )}
    </View>
  );
});

Home.navigationOptions = {
  title: 'Home',
};
const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: 20,
  },
});
