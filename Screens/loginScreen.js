import React, { Component } from 'react'
import { Text, View, Image,StyleSheet } from 'react-native'
import {LoginScreenPicture} from '../Components/common/images/LoginScreenPicture'
import {LoginBuddyIcon } from '../Components/common/images/LoginBuddyIcon'
import { Button, Card } from 'react-native-elements'
import {FullWidthImage } from '../Components/common/FullWidthImage'

export  class LoginScreen extends Component {
    constructor(props) { 
        super(props)
        

        this.onSignup = this.onSignup.bind(this);
    }
    onSignup() { 
        this.props.navigation.navigate('SignupScreen')
    }
  render() {
    return (
        
     <View Style = {styles.container}>
    <LoginScreenPicture />
    
    
    <Card containerStyle = {styles.cardContainter} 
          >
    <Text>find your furry best friend</Text> 
    
    <View style = {styles.buttonSignUpContainer}
     >
    <Button
    title = 'Sign Up' 
    buttonStyle = {styles.signUpButton}
    onPress = {() => this.onSignup()}/>
    </View>
    <View>
    <Button
    title = 'Log In' 
    buttonStyle = {styles.loginButton}/>
    </View>
    </Card> 
    
        </View>
    
    )
  }
}

const styles = StyleSheet.create({ 
 container: { 
     fontFamily: "SFProDisplay",
     fontSize: 17,

 }, 
 cardContainter: { 
    top: 60,
    borderColor: "white",
    alignItems: 'center', 
    justifyContent: 'center'
 },  
Icon: { 
    position: 'absolute',
    top: 0,
    left: 0, 
    bottom: 0, 
    right: 0, 
    justifyContent: 'center',
    alignItems: 'center',
    
}, 
signUpButton: { 
    width: 295,
    height: 50,
    borderRadius: 10,    
    backgroundColor: "#8ac9ce"
    
}, 
buttonSignUpContainer: { 
    borderRadius: 10
    
},

loginButton: { 
    width: 295,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#bdd12c'
},

loginButtonContainer: { 
    borderRadius: 10,
    
}


})