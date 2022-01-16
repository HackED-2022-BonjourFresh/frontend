import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

export default function GroceryList() {

    const [ingredients, setIngredients] = useState([]);

    const [keys,setKeys] = useState([]);


    const header = {
        fontWeight: "bold",
        paddingLeft: 10,
        width: 100
    }

    const col = {
        paddingLeft: 10,
        paddingTop: 5,
        width: 100
    }

    const nameHeader = {
        fontWeight: "bold",
        paddingLeft: 10,
        width: 150
    }

    const nameCol = {
        paddingLeft: 10,
        paddingTop: 5,
        width: 150
    }

    useFocusEffect(
        React.useCallback(() => {
            axios.get(`https://bonjour-fresh-api.azurewebsites.net/grocery_list_for_user`)
            .then(res => {

                const jsonData = res.data
                var result = Object.keys(jsonData).map(function(k) {
                    return jsonData[k];
                });
                setIngredients(result);
                setKeys(Object.keys(jsonData));
            });
        }, [])
      );

    return (
        <View style={{alignItems: 'center'}}>
            <ScrollView>
                <View style={{flexDirection:"row"}}>
                    <Text style={nameHeader}>Name</Text>
                    <Text style={header}>Amount</Text>
                    <Text style={header}>Unit</Text>
                </View>
                {
                    ingredients.map((item, i) => {
                        return <View key={i} style={{flexDirection:"row"}}>
                            <Text style={nameCol}>
                                {
                                    item.name
                                }
                            </Text>
                            
                            <Text style={col}>{item.amount}</Text>
                            <Text style={col}>{item.unit}</Text>
                        </View>;
                    })
                }
            </ScrollView>
        </View>
    )
}
