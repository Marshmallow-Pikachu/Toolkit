import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SettingScreen from './src/screens/SettingScreen';
import CalculatorScreen from './src/screens/CalculatorScreen';
import Colors from './src/Colors';

const App = () => {
  // For navigation
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={SettingScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'CONTROL PANEL',
            headerTintColor: Colors.fontColor,
            headerStyle: {
              backgroundColor: Colors.header,
            },
          }}
        />
        <Stack.Screen name="calculator" component={CalculatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
