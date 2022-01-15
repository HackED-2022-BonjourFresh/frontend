
import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Button, Input, ButtonGroup } from 'react-native-elements';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import axios from 'axios';

const styles = StyleSheet.create({
	buttonStyle: {
		padding: 12,
		paddingHorizontal: 25,
	},
	buttonContainer: {
		flexDirection:'row',
		justifyContent: 'center',
    	alignItems: 'center',
	},
	buttonText: {
		color: 'black'
	},
	greenBackground: {
		backgroundColor: '#003314'
	},
	whiteText: {
		color: 'white'
	},
	inputForm: {
		padding: 12,
		paddingTop: 50,
    	alignItems: 'center',
	},
	formLabel: {
		paddingLeft: 12,
		fontSize: 18,
		paddingTop: 24,
		paddingBottom: 10,
		alignItems: 'flex-start',
		width: '100%'
	},
	dropdown2BtnStyle: {
		width: "94%",
		height: 50,
		backgroundColor: "#FFC72C",
		borderRadius: 8,
  },
	dropdown2BtnTxtStyle: {
		color: "#FFF",
		textAlign: "center",
		fontWeight: "bold",
  },
	bottom: {
		paddingTop: 100,
    	justifyContent: 'flex-end',
	},
	loginForm: {
		padding: 12,
		justifyContent: 'center',
		height: '80%'
	},
});


const Login = ({navigation, props}) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [buttonSelected, setButtonSelected] = useState(1);
    const [username, setUsername] = useState("");

    const buttonClicked = (title) => {
		switch (title) {
			case 'login':
				setButtonSelected(1);
				break;
			case 'signup':
				setButtonSelected(2);
				break;
			default:
				console.log('unknown button clicked in login page');
		}
	}

    const formChanged = (label, text) => {
        switch (label) {
            case 'username':
                setUsername(text);
                break;
            default:
                console.log("unknown value added to form");
        }
    }

    const signUp = () => {
        console.log('sending http request to make new account');

        const user = {
            username,
        };

        console.log(user);
        axios.post("https://localhost.com/createUser",user)
            .then(res => {
                if (res.status === 201){
                    navigation.replace('Main', {username});
                }
            }); // Change this later
    }

    const login = () => {
        console.log('send http request for login');

        axios.get(`https://localhost.com/login/${username}`).then(resp => {
            console.log('test');
            if (resp.status === 200){
                console.log('success');
                // if (resp.status === 200){
                //     navigation.replace('Main', {username: resp.data.user});
                // }
            }
        });
    }
    return (
        <View>
            <ScrollView>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonStyle}>
                        <Button
                            title="Login"
                            type={buttonSelected === 1 ? "solid" : "clear"}
                            titleStyle={buttonSelected === 1 ? styles.whiteText : styles.buttonText}
                            buttonStyle={buttonSelected === 1 ? [styles.buttonStyle , styles.greenBackground] : styles.buttonStyle}
                            onPress={()=> buttonClicked('login')}
                        />
                    </View>
					<View style={styles.buttonStyle}>
						<Button
							title="Sign Up"
							type={buttonSelected === 2 ? "solid" : "clear"}
							titleStyle={buttonSelected === 2 ? styles.whiteText : styles.buttonText}
							buttonStyle={buttonSelected === 2 ? [styles.buttonStyle, styles.greenBackground] : styles.buttonStyle}
							onPress={() => buttonClicked('signup')}
						/>
					</View>
                </View>
                { buttonSelected == 2
                ? <View style={styles.inputForm}>
                    <Input
                        placeholder='Username'
                        onChangeText={value => formChanged('username', value)}
                    />
                    <View style={styles.buttonStyle}>
                        <Button
                            title={"Sign Up"}
                            titleStyle={styles.whiteText}
                            buttonStyle={[styles.buttonStyle, styles.greenBackground]}
                            onPress={() => signUp()}
                        />
                    </View>
                </View> 
                : 
                <View style={styles.loginForm}>
                    <Input
                        placeholder='Username'
                        onChangeText={value => formChanged('username', value)}
                    />

                    <View style={styles.buttonStyle}>
                        <Button
                            title={"Login"}
                            titleStyle={styles.whiteText}
                            buttonStyle={[styles.buttonStyle, styles.greenBackground]}
                            onPress={() => login()}
                        />

                    </View>

                </View>}
            </ScrollView>
        </View>
    );

}

export default Login;