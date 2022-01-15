
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
	yellowBackground: {
		backgroundColor: '#FFC72C'
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

    const formChanged = () => {
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

        axios.get("https://localhost.com/login")
    }

}