import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import {ProgressButton} from 'react-native-progress-button';
import axios from 'axios';


const PlanRecipe = ({navigation, route}) => {
    const [dishesImage, setdishesImage] = useState(route.params.recipe.image);
    const [date, setDate] = useState(route.params.recipe.date);
    const [ingredients, setIngredients] = useState(route.params.recipe.ingredients);
    const [instruction, setInstruction] = useState();
    const [recipeName, setRecipeName] = useState(route.params.recipe.recipe_name);

    useEffect(() => {

        let instructions = route.params.recipe.instructions;

        const splitInstructions = instructions.split("\n");
        setInstruction(splitInstructions);
    },[]);

    return (
        <ScrollView style={{marginLeft:20, marginRight:20}}>
            <Image style={styles.recipeImage} source={dishesImage}/>
            <Text style={{fontWeight:'800', fontSize: '40', fontStyle:"monospace"}}>{recipeName}</Text>
            <Text style={{fontWeight:'300', fontSize: '10', fontStyle:"monospace"}}>{date}</Text>
            
            {
                ingredients.map(ingredient => 
                    <View>
                        <Text style={{fontWeight:'700', paddingTop: 10}}>
                            Ingredient {ingredient.name}
                        </Text>
                        <Text style={{paddingTop: 10}}>
                            {ingredient.quantity}
                        </Text>
                    </View>
                )
            }

            {
                instruction.map(ins => 
                    <View>
                        <Text style={{paddingTop: 10}}>
                            {ins}
                        </Text>
                    </View>
                )
            }



        </ScrollView>
    );
}

export default PlanRecipe;