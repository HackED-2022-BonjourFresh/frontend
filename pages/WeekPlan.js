import React, {useState, useEffect} from 'react';
import { StyleSheet, ScrollView, Text, View, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import _ from 'lodash';

import axios from 'axios';

import RecipeCard from './Components/RecipeCard';

export default function WeekPlan({navigation}) {
    const [recipes, setRecipes] = useState([]);
    const [monday, setMonday] = useState(setToMonday(new Date()));
    const [weeklyRecipes, setWeeklyRecipes] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
            axios.get(`http://127.0.0.1:5000/recipes_for_user`)
            .then(res => {
                setRecipes(res.data);

                setWeeklyRecipes(_.filter(res.data, d => {
                    let dateObject = new Date(d.date);

                    let nextMonday = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 7);

                    return dateObject < nextMonday && dateObject >= monday;
                }));
            });
        }, [monday])
      );    

    const onRecipeCardClicked = (i) => {
        navigation.navigate('PlanRecipe', { recipe: weeklyRecipes[i] });
    }

    const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
        "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    function setToMonday( date ) {
        var day = date.getDay() || 7;  
        if( day !== 1 ) 
            date.setHours(-24 * (day - 1)); 
        return date;
    }

    const prevBtnClicked = () => {
        const newDate = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() - 7);
        setMonday(newDate);
        setWeeklyRecipes(_.filter(recipes, d => {
            let dateObject = new Date(d.date);

            let nextMonday = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 7);

            return dateObject < nextMonday && dateObject >= newDate;
        }));
    }

    const nextBtnClicked = () => {
        const newDate = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 7);
        setMonday(newDate);
        setWeeklyRecipes(_.filter(recipes, d => {
            let dateObject = new Date(d.date);

            let nextMonday = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 7);

            return dateObject < nextMonday && dateObject >= newDate;
        }));
    }
    
    return (
        <View>
            <View style={{flexDirection:"row", marginLeft: 'auto', marginRight: 'auto', marginTop: 10}}>
                <Button
                    title="Prev Week"
                    onPress={() => prevBtnClicked()}
                />
                <View style={{alignItems: 'center'}}>
                    <Text>Week Of </Text>
                    <Text style={{fontWeight: 'bold', fontSize: 25}}>{monthNames[monday.getMonth()]} {monday.getDate()}</Text>
                </View>
                <Button
                    title="Next Week"
                    onPress={() => nextBtnClicked()}
                />
            </View>
            <ScrollView>
                {
                    weeklyRecipes.map((d, i) => <RecipeCard
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
