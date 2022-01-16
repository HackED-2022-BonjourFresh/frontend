
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

    const [description, setDescription] = useState(route.params.recipe.summary);
    const [steps, setSteps] = useState(route.params.recipe.analyzedInstructions);

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
    }, []);

    return (
        <View>

            {/* <Container>
                <Navbar
                    title={"Recipe Details"}
                    left={{
                        icon: "ios-arrow-back",
                        label: "Back",
                        onPress: () => {alert('Go back!')}
                    }}

                />
            </Container> */}

            <Image style={styles.recipeImage} source={dishesImage}/>
            <Text>{dishesName}</Text>

            <View style={{flexDirection:"row", alignItems: 'center', paddingTop: 10}}>
                <View>
                    <Text>
                        {dishesTime} min
                    </Text>
                    <Text>
                        Total
                    </Text>
                </View>
                
                <View>
                    <Text>
                        {dishesCalories}
                    </Text>
                    <Text>
                        Calories
                    </Text>
                </View>                
                
                <View>
                    <Text>
                        {dishesDiet}
                    </Text>
                    <Text>
                        Diet
                    </Text>
                </View>
            </View>
            <View>
                <Text>Description</Text>
                <Text>{description}</Text>
            </View>
            <View>
                <Text>Instructions</Text>
            </View>
        </View>
    );
}

export default Recipe;