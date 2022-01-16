import React, {useState, useEffect} from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import axios from 'axios';

import RecipeCard from './Components/RecipeCard';

export default function WeekPlan() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/recipes_for_user`)
            .then(res => {
                setRecipes(res.data);
            });
    }, []);

    const onRecipeCardClicked = (i) => {
        navigation.navigate('Recipe', { recipe: dishes[i] });
    }

    return (
        <View>
            <ScrollView>
                {
                    recipes.map((d, i) => <RecipeCard
                                                key={i}
                                                title={d.recipe_name}
                                                imageURL={d.image}
                                                onClick={() => onRecipeCardClicked(i)}
                                            />
                    )
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})
