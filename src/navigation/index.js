import React, {useState} from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../screens/Welcome.js';
import VPN from '../screens/VPN.js';

const App = () => {
  const [isSigned, SetIsSigned] = useState(false);
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="VPN" component={VPN} />
    </NavigationContainer>
  );
};

export default App;
