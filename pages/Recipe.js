
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import axios from 'axios';


const styles = StyleSheet.create({
    recipeImage: {
        width: '100%',
        height: 200,
      }    


});

const Recipe = ({navigation, route}) => {
    const [dishesID, setdishesID] = useState(route.params.recipe.id);
    const [dishesImage, setdishesImage] = useState(route.params.recipe.image);
    const [dishesName, setdishesName] = useState(route.params.recipe.title);
    const [dishesTime, setdishesTime] = useState(route.params.recipe.readyInMinutes);
    const [dishesCalories, setdishesCalories] = useState("");

    const [dishesDiet, setdishesDiet] = useState(route.params.recipe.diets);

    const [description, setDescription] = useState(null);
    const [steps, setSteps] = useState(route.params.recipe.analyzedInstructions[0].steps);

    useEffect(() => {
        let text = route.params.recipe.summary;
        const oneServingSplit = text.split("<b>");
        console.log(oneServingSplit);

        for (var i = 0; i < oneServingSplit.length; i++) {
            if (oneServingSplit[i].includes("calories")){
                // Split by </b>
                const removeB = oneServingSplit[i].split("</b>");
                // remove is a list, beginning contains "___ calories"
                const finalStringArray = removeB[0].split(" ");
                const number = finalStringArray[0]
                setdishesCalories(number);
            }
        }
        const noB = text.replaceAll('<b>', '');
        const bBackB= noB.replaceAll('</b>', '');
        console.log(bBackB);
        const splitbBackB = bBackB.split("Try");
        setDescription(splitbBackB[0]);
    }, []);


    return (
        <View style={{marginLeft:20, marginRight:20}}>
            <Image style={styles.recipeImage} source={dishesImage}/>
            <Text style={{fontWeight:'800', fontSize: '10', fontStyle:"monospace"}}>{dishesName}</Text>

            <View style={{flexDirection:"row", justifyContent: 'center',alignItems: 'center', paddingTop: 10}}>
                <View style={{alignItems: 'center', width:100}}>
                    <Text>
                        {dishesTime} min
                    </Text>
                    <Text>
                        Total
                    </Text>
                </View>
                
                <View style={{alignItems: 'center', width:100}}>
                    <Text>
                        {dishesCalories}
                    </Text>
                    <Text>
                        Calories
                    </Text>
                </View>                
                
                <View style={{alignItems: 'center', width:100}}>
                    <Text>
                        {dishesDiet}
                    </Text>
                    <Text>
                        Diet
                    </Text>
                </View>
            </View>
            <View>
                <Text style={{fontWeight:'700', paddingTop: 10}}>Description</Text>
                <Text style={{paddingTop: 10}}>{description}</Text>
            </View>
            <View>
                <Text style={{fontWeight:'700', paddingTop: 10}}>Instructions</Text>
                {
                    steps.map(step => 
                        <View>
                            <Text style={{fontWeight:'700', paddingTop: 10}}>
                                Step {step.number}
                            </Text>
                            <Text style={{paddingTop: 10}}>
                                {step.step}
                            </Text>
                        </View>
                    )
                }

            </View>
        </View>
    );
}

export default Recipe;