import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import axios from 'axios';

import { Container, Navbar } from 'navbar-native';


const styles = StyleSheet.create({
    recipeImage: {
        width: '100%',
        height: 200,
      }    
});

const Recipe = ({navigation, dishes_I}) => {

    // recipeIndex = i in dishes[i]
    // const [dishesID, setdishesID] = useState(dishes_I.id);
    // const [dishesImage, setdishesImage] = useState(dishes_I.image);
    // const [dishesName, setdishesName] = useState(dishes_I.title);
    // const [dishesTime, setdishesTime] = useState(dishes_I.readyInMinutes);
    // const [dishesCalories, setdishesCalories] = useState(null);

    // const [dishesDiet, setdishesDiet] = useState(dishes_I.diet);


    const [dishesID, setdishesID] = useState(123456);
    const [dishesImage, setdishesImage] = useState("https://spoonacular.com/recipeImages/715493-556x370.jpg");
    const [dishesName, setdishesName] = useState("Slow Cooker Red Beans and Rice");
    const [dishesTime, setdishesTime] = useState("45");
    const [dishesCalories, setdishesCalories] = useState("639");

    const [dishesDiet, setdishesDiet] = useState("Ketogenic");

    const [description, setDescription] = useState("Slow Cooker Red Beans and Rice might be just the main course you are searching for. This gluten free recipe serves 5 and costs");
    const [steps, setSteps] = useState("");
    // useEffect(() => {
    //     let text = dishes_I.summary;
    //     const oneServingSplit = text.split("<b>");

    //     for (var i = 0; i < oneServingSplit.length; i++) {
    //         console.log(oneServingSplit[i]);
    //         if (oneServingSplit[i].includes("calories")){
    //             // Split by </b>
    //             const removeB = oneServingSplit[i].split("</b>");
    //             // remove is a list, beginning contains "___ calories"
    //             const finalStringArray = removeB[0].split(" ");
    //             const number = finalStringArray[0]
    //             setdishesCalories(number);
    //         }
    //     }
    // }, []);

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