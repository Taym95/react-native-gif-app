import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {GifDetails, Home} from './src/screens';

const AppStack = createStackNavigator(
  {Home: Home, GifDetails: GifDetails},
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppStack);
