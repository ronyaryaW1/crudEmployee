import CreateEmployee from './Screen/CreateEmployee';
import Home from './Screen/Home';
import Profile from './Screen/Profile';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const myOptions = {
  title: 'Home',
  headerTintColor: 'white',
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: 'red',
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={myOptions} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ ...myOptions, title: 'Profile' }}
        />
        <Stack.Screen
          name="CreateEmployee"
          component={CreateEmployee}
          options={{ ...myOptions, title: 'Create Employee' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
