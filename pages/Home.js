// Boilerplate
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';

import RecipeCard from './Components/RecipeCard';

const apiKey = '83edffb21ef341eabd82bc4580c72ea8';
// const recipes = require('../assets/recipes.json');

const Home = ({navigation, route}) => {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`)
            .then(res => {
                setDishes(res.data.recipes);
            });
    }, []);

    const onRecipeCardClicked = (i) => {
        navigation.navigate('Recipe', { recipe: dishes[i] });
    }

    const loadMore = () => {
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`)
            .then(res => {
                setDishes(dishes.concat(res.data.recipes));
            });
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
                <Button
                    title="More"
                    onPress={() => loadMore()}
                />
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