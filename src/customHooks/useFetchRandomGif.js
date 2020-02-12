import React from 'react';
import {getRandomGif} from '../api';

export const useFetchRandomGif = () => {
  const [count, setCount] = React.useState(0);
  const [randomGif, setFetchRandomGif] = React.useState(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 10000);

    return () => clearInterval(interval);
  });
  React.useEffect(() => {
    getRandomGif()
      .then(gif => setFetchRandomGif(gif))
      .catch(function(error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        throw error;
      });
  }, [count]);
  return randomGif;
};
