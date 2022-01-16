import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, DeviceEventEmitter } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

import WeekPlan from './pages/WeekPlan.js';
// import Week from './pages/Components/Week.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Recipe from './pages/Recipe.js';
import GroceryList from './pages/GroceryList.js';
import PlanRecipe from './pages/PlanRecipePage.js';
// import Recipe from './pages/Recipe.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  DeviceEventEmitter.addListener("event.loggedIn", (d) => {
    setIsSignedIn(true);
	});

  return (
    <Tab.Navigator>
      { isSignedIn 
        ? (<>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Plan" component={WeekPlan} />
            <Tab.Screen name="Grocery" component={GroceryList} />
          </>)
        : <Tab.Screen name="Login" component={Login} />
      }
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MyTabs} options={{ headerShown: false }}/>
        <Stack.Screen name="Recipe" component={Recipe}/>
        <Tab.Screen name="PlanRecipe" component={PlanRecipe} />
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
