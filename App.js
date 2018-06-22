import React, { Component } from 'react'
import { Text, View ,} from 'react-native'
//import {LoginScreen} from './Screens/loginScreen'
import {LoginStackNaviator} from './navigator/LoginStackNaviator'

export default class App extends Component {
  render() {
    return (
      <View>
       <LoginStackNaviator />
      </View>
    ); 
    }
  }
