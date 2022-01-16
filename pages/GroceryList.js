import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/grocery_list_for_user`)
            .then(res => {

                const jsonData = res.data
                var result = Object.keys(jsonData).map(function(k) {
                    return jsonData[k];
                });
                setIngredients(result);
                setKeys(Object.keys(jsonData));
            });
    }, []);

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
                        <Text style={nameCol}>
                            {
                                item[0]
                            }
                        </Text>
                        
                        <Text style={col}>{item.amount}</Text>
                        <Text style={col}>{item.unit}</Text>
                    </View>;
                })
            }
        </View>
    )
}
