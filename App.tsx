import React from 'react';
import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Resources from './hooks/resource'; 
import HomeScreen from './screens/HomeScreen';
import PinScreen from './screens/PinScreen';

const Stack = createStackNavigator();

const App=() => {
  const isLoadingComplete = Resources();

  if (!isLoadingComplete){
    return <AppLoading/>
  }
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pin" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pin" component={PinScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;