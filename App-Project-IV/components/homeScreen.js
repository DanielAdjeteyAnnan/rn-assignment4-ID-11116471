import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';

export default function HomeScreen(){
    return(
        <View>
            <Text style={styles.welcomeText}>Welcome to the Home Screen!</Text>


            <StatusBar style="auto" /> 
        </View>

    )
}
const styles = StyleSheet.create({
    weltext: {
        fontSize: 50,
    }

})