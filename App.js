import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, DeviceEventEmitter } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import WeekPlan from './pages/WeekPlan.js';
// import Week from './pages/Components/Week.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
<<<<<<< HEAD
import Recipe from './pages/Recipe.js';
=======
import GroceryList from './pages/GroceryList.js';
// import Recipe from './pages/Recipe.js';
>>>>>>> e856e6acfb1e375f997b0af2d7afd4a5d221935f

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  DeviceEventEmitter.addListener("event.loggedIn", (d) => {
    setIsSignedIn(true);
	});

  return (
    <Tab.Navigator>
      { isSignedIn 
        ? (<>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Recipe" component={Recipe}/>
            <Tab.Screen name="Plan" component={WeekPlan} />
            {/* <Tab.Screen name="Grocery" component={GroceryList} /> */}
          </>)
        : <Tab.Screen name="Login" component={Login} />
      }
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
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
