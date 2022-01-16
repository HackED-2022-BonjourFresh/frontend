import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function GroceryList() {
    const ingredients = [
    {
        name: 'milk',
        amount: 8,
        unit: 'cups'
    },
    {
        name: 'butter',
        amount: 2,
        unit: 'cups'
    },
    {
        name: 'beef',
        amount: 1,
        unit: 'lbs'
    },
    {
        name: 'potatoe',
        amount: 5,
        unit: 'lbs'
    }];

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

    return (
        <View style={{alignItems: 'center'}}>
            <View style={{flexDirection:"row"}}>
                <Text style={nameHeader}>Name</Text>
                <Text style={header}>Amount</Text>
                <Text style={header}>Unit</Text>
            </View>
            {
                ingredients.map((item, i) => {
                    return <View style={{flexDirection:"row"}}>
                        <Text style={nameCol}>{item.name}</Text>
                        <Text style={col}>{item.amount}</Text>
                        <Text style={col}>{item.unit}</Text>
                    </View>;
                })
            }
        </View>
    )
}
