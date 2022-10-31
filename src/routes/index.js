import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen style={styles.menu}
                name="Login with"
                component={Welcome}

            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
            />
        </Stack.Navigator>
    )
};

const styles = StyleSheet.create({

    container: {

    },

    menu: {

        position: absolute,
        width: 143px,
        height: 40px,
        left: 120px,
        top: 49px,
        fontFamily: 'Arial',
        fontStyle: normal,
        fontWeight: 700,
        fontSize: 28px,
        lineHeight: 32px 
    }
    
    
})