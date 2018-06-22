import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { FullWidthImage } from '../Components/common/FullWidthImage'
import { Button, FormInput, FormValidationMessage, Card } from 'react-native-elements'
export class SignupScreen3 extends Component {

    render() {
        return (
            <View styles={styles.container} >

                <FullWidthImage source={require('../Components/common/images/signup3.png')}
                    ratio={0.85} />
                <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.tellUs}> What kind of pet are you looking for? </Text>
                    <Text>(you can select both)</Text>
                    <View style={styles.catDogContainer} >
                        
                    </View>


                    <Button title='Next' buttonStyle={styles.button} />
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    catDogContainer: {
        flexDirection: 'row'

    },
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