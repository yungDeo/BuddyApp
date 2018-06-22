import React, { Component } from 'react'
import {FullWidthImage} from '../FullWidthImage'
import { 
    Text, 
    View,
    Image,
    StyleSheet
} from 'react-native'
//import LoginPicture from './LoginPicture.png'

export  class LoginScreenPicture extends Component {
  render() {
    return (
      <View>
        <FullWidthImage source = {require('./Loginpicreal.png') }
        ratio = {469/414}/>
      </View>
    )
  }
}

        
  