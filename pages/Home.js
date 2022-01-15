// Boilerplate
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import RecipeCard from './Components/RecipeCard';
import WeekPlan from './WeekPlan.js';

const apiKey = '83edffb21ef341eabd82bc4580c72ea8';
const recipes = require('../assets/recipes.json');

const Home = ({navigation, route}) => {
    const [dishes, setDishes] = useState(recipes);

    // useEffect(() => {
    //     axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`)
    //         .then(res => {
    //             setDishes(res.data.results);
    //         });
    // }, []);

    const onRecipeCardClicked = (i) => {
        console.log(dishes[i]);
    }

    return (
        <View style={StyleSheet.container}>
            <ScrollView>
                {
                    dishes.map((dish, i) => <RecipeCard
                                                key={i}
                                                title={dish.title}
                                                imageURL={dish.image}
                                                time={dish.readyInMinutes}
                                                cuisines={dish.cuisines}
                                                onClick={() => onRecipeCardClicked(i)}
                                            />
                    )
                }
            </ScrollView>
        </View>  
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

export default Home;