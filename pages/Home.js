// Boilerplate
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Home(){
    return (
        <View style={StyleSheet.container}>
            <Text>Page that contains the nav bar for the recipe lists</Text>
            <StatusBar style="auto" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  