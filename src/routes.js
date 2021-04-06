import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSwitchNavigator } from '@react-navigation/compat';
import Main from './pages/Main';

const Routes = () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  )
}

export default Routes;