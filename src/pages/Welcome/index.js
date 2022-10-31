import React from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/*  <View>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/Vector.png')}
                    style={{ witdh: '100%' }}
                />
            </View>*/}
            {/*-Authentication Apple*/}
            <View id="apple" style={styles.containerForm}>
                <TouchableOpacity>
                    <TextInput  style={styles.buttonA} id="idApple"
                        placeholder="Apple1"
                    />
                </TouchableOpacity>
            </View>


            <Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
            

            {/*-Authentication Facebook*/}
            <View id="face" style={styles.containerForm}>
                <TouchableOpacity style={styles.button}>
                    <TextInput id="idFace"
                        placeholder="Email or user"
                    />
                </TouchableOpacity>
            </View>

            {/*-Authentication Google*/}
            <View id="google" style={styles.containerForm}>
                <TouchableOpacity style={styles.button}>
                    <TextInput id="idGoogle"
                        placeholder="Email or user"
                    />
                </TouchableOpacity>
            </View>

            {/*-Authentication Twitter*/}
            <View id="twitter" style={styles.containerForm}>
                <TouchableOpacity style={styles.button}>
                    <TextInput id="idTwitter"
                        placeholder="Email or user"
                    />
                </TouchableOpacity>
            </View>

            {/*-Authentication Default*/}
            <View id="default" style={styles.containerForm}>
                <TouchableOpacity style={styles.button}>
                    <TextInput id="idDefault"
                        placeholder="Email or user"
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <TextInput
                        placeholder="Password"
                    />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    style={styles.buttonRedefine}
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text>Redefine Password</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button3}
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity>
            </View>
           
            <View>
                <TouchableOpacity
                    style={styles.button3}
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.button}>Logging with Apple</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button3}
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.button}>Logging with Google</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.button3}
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.button}>Logging with Facebook</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.button3}
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.button}>Logging with Twitter</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button3}
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.button}>Create an account</Text>
                </TouchableOpacity>
            </View>

        </View >

    );
}

const styles = StyleSheet.create({

    container: {
        color:'#0000ff',
        borderColor:'#000',
    },

    buttonA: {
        textAlign:'center',
        color:'#00fff',
        borderColor:'#000'
    },
    button2: {
        colors: {
            background: '#red',
            text: '#121212',
        }
    }

})
