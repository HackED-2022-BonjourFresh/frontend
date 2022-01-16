// Boilerplate
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';

import RecipeCard from './Components/RecipeCard';

const apiKey = '5defe6c72e9b4862bdf07074efa510e9';
const recipes = require('../assets/recipes.json');

const Home = ({navigation, route}) => {
    const [dishes, setDishes] = useState([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('all');
    const [cuisines, setCuisines] = useState([
        {label: 'All', value: 'all'},
        {label: 'African', value: 'african'},
        {label: 'American', value: 'american'},
        {label: 'British', value: 'british'},
        {label: 'Cajun', value: 'cajun'},
        {label: 'Caribbean', value: 'caribbean'},
        {label: 'Chinese', value: 'chinese'},
        {label: 'Eastern European', value: 'eastern+european'},
        {label: 'European', value: 'european'},
        {label: 'French', value: 'french'},
        {label: 'German', value: 'german'},
        {label: 'Greek', value: 'greek'},
        {label: 'Indian', value: 'indian'},
        {label: 'Irish', value: 'irish'},
        {label: 'Italian', value: 'italian'},
        {label: 'Jewish', value: 'jewish'},
        {label: 'Korean', value: 'korean'},
        {label: 'Latin American', value: 'latin American'},
        {label: 'Mediterranean', value: 'mediterranean'},
        {label: 'Middle Eastern', value: 'middle+eastern'},
        {label: 'Nordic', value: 'nordic'},
        {label: 'Southern', value: 'southern'},
        {label: 'Spanish', value: 'spanish'},
        {label: 'Thai', value: 'thai'},
        {label: 'Vietnamese', value: 'vietnamese'}
    ]);
    
    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`)
            .then(res => {
                setDishes(res.data.recipes);
            });
    }, []);

    useEffect(() => {
        if (value !== 'all') {
            axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10&tags=${value}`)
            .then(res => {
                setDishes(res.data.recipes);
            });
        } else {
            axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`)
            .then(res => {
                setDishes(res.data.recipes);
            });
        }
    }, [value]);

    const onRecipeCardClicked = (i) => {
        navigation.navigate('Recipe', { recipe: dishes[i] });
    }

    const loadMore = () => {
        if (value !== 'all') {
            axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10&tags=${value}`)
            .then(res => {
                setDishes(dishes.concat(res.data.recipes));
            });
        } else {
            axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`)
            .then(res => {
                setDishes(dishes.concat(res.data.recipes));
            });
        }

    }

    return (
        <View style={{marginBottom: 50}}>
            <DropDownPicker
                open={open}
                value={value}
                items={cuisines}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setCuisines}
            />
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