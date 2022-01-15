import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Button, Input, ButtonGroup } from 'react-native-elements';
import SelectDropdown from 'react-native-select-dropdown';
import axios from 'axios';
import { View } from 'react-native';

import { Contaciner, Navbar } from 'navbar-native';

const Recipe = ({navigation, dishes_I}) => {

    // recipeIndex = i in dishes[i]
    const [dishesID, setdishesID] = useState(dishes_I.id);
    const [dishesImage, setdishesImage] = useState(dishes_I.image);
    const [dishesName, setdishesName] = useState(dishes_I.title);
    

    return (
        <View>
            <Container>
                <Navbar
                    title={"Recipe Details"}
                    left={{
                        icon: "ios-arrow-back",
                        label: "Back",
                        onPress: () => {alert('Go back!')}
                    }}
                    right={[{
                        icon: "ios-search",
                        onPress: () => {alert('Search!')}
                    },{
                        icon: "ios-menu",
                        onPress: () => {alert('Toggle menu!')}
                    }]}
                />
            </Container>
            <Image source={dishesImage}/>
            <Text></Text>


        </View>
    );
}