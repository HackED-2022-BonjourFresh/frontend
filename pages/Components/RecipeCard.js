import React, { useState } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import Svg, { Path } from "react-native-svg"
import CircularProgress from 'react-native-circular-progress-indicator';

const RecipeCard = (props) => {
    const onClick = () => {
        props.onClick();
    }
    
    return (
		<View>
            <TouchableOpacity onPress={onClick}>
                <Card>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Divider/>
                    <View>
                        <Image
                            style={styles.recipeImage}
                            source={{uri: props.imageURL}}
                        />
                        <View style={{flexDirection:"row", alignItems: 'center', paddingTop: 10}}>
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM17 11H13V6H11V13H17V11Z" fill="black"/>
                            </Svg>
                            <Text style={{paddingLeft:5}}>{props.time} min</Text>
                        </View>
                        {
                            props.cuisines.length !== 0 
                            ? <View style={{flexDirection:"row", alignItems: 'center', paddingTop: 10}}>
                                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M1 13H3.05493C3.51608 17.1716 6.82838 20.4839 11 20.9451V23H13V20.9451C17.1716 20.4839 20.4839 17.1716 20.9451 13H23V11H20.9451C20.4839 6.82838 17.1716 3.51608 13 3.05493V1H11V3.05493C6.82838 3.51608 3.51608 6.82838 3.05493 11H1V13ZM5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z" fill="black"/>
                                </Svg>
                                    <View style={{flexDirection:"row"}}>
                                        {props.cuisines.map((d,i) => <Text key={i} style={i !== 0 ? {paddingLeft: 10} : {paddingLeft: 5}}>{d}</Text>)}
                                    </View>
                                </View> 
                            : null
                        }
                    </View>
                </Card>
            </TouchableOpacity>
		</View>
    );
}

const styles = StyleSheet.create({
    recipeImage: {
        width: '100%',
        height: 200,
      }    
});

export default RecipeCard;