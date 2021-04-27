import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SettingScreen from './src/screens/SettingScreen';
import CalculatorScreen from './src/screens/CalculatorScreen';

const App = () => {
  // For navigation
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={SettingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="calculator" component={CalculatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
