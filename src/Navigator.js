import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IndexScreen from './screens/IndexScreen';
import ShowScreen from './screens/ShowScreen';
import CreateScreen from './screens/CreateScreen';

import { Provider as BlogProvider } from './context/BlogContext';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="IndexScreen" component={IndexScreen} />
        <Stack.Screen name="ShowScreen" component={ShowScreen} />
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
    return (
        <BlogProvider>
            <Navigator />
        </BlogProvider>
    );
};