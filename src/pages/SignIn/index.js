import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';

export default function SignIn(){
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.container.Header}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>


            <Animatable.View animation="fadeInLeft"  style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="wirte you email"
                    style={styles.input}
                    />
              
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});