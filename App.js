import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Week from './pages/Components/Week.js';
import Home from './pages/Home.js';
import Login from './Containers/pages/Login.js';
import Recipe from './Containers/pages/Recipe.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: '',
            headerStyle: {
              height: '0px'
            }
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '',
            headerStyle: {
              height: '0px'
            }
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '',
            headerStyle: {
              height: '0px'
            }
          }}
        />

        <Stack.Screen
          name="Week"
          component={Week}
          options={{
            title: '',
            headerStyle: {
              height: '0px'
            }
          }}
        />

        <Stack.Screen
          name="Recipe"
          component={Recipe}
          options={{
            title: '',
            headerStyle: {
              height: '0px'
            }
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
