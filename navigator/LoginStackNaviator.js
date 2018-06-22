import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator} from 'react-navigation'
import {LoginScreen} from '../Screens/loginScreen'
import {SignupScreen } from '../Screens/signupScreen'
import { SignupScreen2 } from '../Screens/signupScreen2'
import{ SignupScreen3 } from '../Screens/signupScreen3'
const RootStack = createStackNavigator({
    Home: {
        screen: LoginScreen,
        headerMode: 'none',
        navigationOptions: { 
            headerVisible:false,
            header: null

        },
    },
    SignupScreen: { 
        screen: SignupScreen,
        headerMode: 'none',
        navigationOptions: {     
            headerVisible:false,
            header: null,
            
        }

    },
    SignupScreen2: { 
        screen: SignupScreen2,
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
            header: null,

    }
}, 
    SignupScreen3: { 
        screen: SignupScreen3,
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
            header: null,

        }

    },
    
        initialRouteName: 'Home'
    }
);
export  class LoginStackNaviator extends Component {
    
  render() {
    return (
      <RootStack />
    )
  }
}