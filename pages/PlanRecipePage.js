import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import {ProgressButton} from 'react-native-progress-button';
import axios from 'axios';

const styles = StyleSheet.create({
    recipeImage: {
        width: '100%',
        height: 200,
      }
});

const PlanRecipe = ({navigation, route}) => {
    const [dishesImage, setdishesImage] = useState(route.params.recipe.image);
    const [date, setDate] = useState(route.params.recipe.date);
    const [ingredients, setIngredients] = useState(route.params.recipe.ingredients);
    const [instruction, setInstruction] = useState([]);
    const [recipeName, setRecipeName] = useState(route.params.recipe.recipe_name);

    useEffect(() => {
        let instructions = route.params.recipe.instruction;

        const splitInstructions = instructions.split("\n");
        setInstruction(splitInstructions);
    },[]);

    return (
        <ScrollView style={{marginLeft:20, marginRight:20, marginBottom: 50}}>
            <Image style={styles.recipeImage} source={{uri:dishesImage}}/>
            <Text style={{fontWeight:'800', fontSize: 40, fontStyle:"normal"}}>{recipeName}</Text>
            <Text style={{fontWeight:'300', fontSize: 10, fontStyle:"normal"}}>{date}</Text>
            
            {
                ingredients.map((ingredient, i) => 
                    <View key={i} style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight:'700', paddingTop: 10, width: 180}}>
                            {ingredient.name}
                        </Text>
                        <Text style={{paddingTop: 10}}>
                            {ingredient.amount} {ingredient.unit}
                        </Text>
                    </View>
                )
            }
            <Text style={{paddingTop: 50, fontWeight: '800'}}>Instructions</Text>
            {
                instruction.map((ins, i) => 
                    <View key={i}>
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