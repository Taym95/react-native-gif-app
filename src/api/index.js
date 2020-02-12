import {myAxios} from './axios';

const {CancelToken} = myAxios;

let cancel;

// this api key need to be in .env file
// I usaly use https://github.com/luggit/react-native-config
// I will use a const for now
const api_key = 'dc6zaTOxFJmzC';

const cancellation = () => ({
  cancelToken: new CancelToken(function executor(canceller) {
    cancel = canceller;
  }),
});

export const seachByName = async gif => {
  const response = await myAxios.get(
    `search?q=${gif}&limit=20&api_key=${api_key}`,
    cancellation,
  );
  return response.data;
};

export const getRandomGif = async () => {
  const {data} = await myAxios.get(`random?api_key=${api_key}`, cancellation);
  return data.data;
};
