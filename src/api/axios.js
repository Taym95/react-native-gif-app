import axios from 'axios';
// I could use default javasccript fetch but I used
// axios because it's easy to use
const options = {
  baseURL: 'http://api.giphy.com/v1/gifs/',
};
const myAxios = axios.create(options);

export {myAxios};
