import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import {FullWidthImage } from '../Components/common/FullWidthImage'
import {Button, FormInput,FormValidationMessage,Card } from 'react-native-elements'
export  class SignupScreen extends Component {
    constructor(props) {
        super(props)


        this.onSignup = this.onSignup.bind(this);
    }
    onSignup() {
        this.props.navigation.navigate('SignupScreen2')
    }

  render() {
    return (
    <View styles = {styles.container} > 
        
        <FullWidthImage source = {require('../Components/common/images/topHalfSignUp1.png')  }
        ratio = {0.85}/>
        <Card containerStyle = {styles.cardContainer }> 
            <Text style = {styles.tellUs }> To start, tell us a little about yourself.</Text>
        
         <FormInput
         placeholder = 'Name' 
         inputStyle ={styles.form} />
         
          
         <FormInput inputStyle = {styles.form}
         placeholder = 'email' />
         
          
        <FormInput inputStyle = { styles.form}
        placeholder = 'password' />
        <Button title = 'Next' 
                buttonStyle = {styles.button }
                onPress = {() => this.onSignup() }/>
        </Card>
    </View>
    )
  }
}

const styles = StyleSheet.create({ 
    
    form: {
        position: 'relative',
        textAlign: 'center'
     }, 
    tellus: {
        position: 'relative',  
        width: 325,
        height: 28,
        fontFamily: "Avenir",
        fontSize: 18,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0.39,
        textAlign: "center",
        color: "#4a4a4a"


    },
    container: { 
        flexDirection: 'row'

    },
    cardContainer: 
    { 
        position: 'relative', 
        top: 61, 
        

    },
    button: { 

    }
})