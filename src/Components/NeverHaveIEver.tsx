import React, { Component } from 'react';  
import { StyleSheet, View, Text} from 'react-native';

export default function NeverHaveIEver() {

    return (

        <View style={styles.item6}>
		<Text style={{fontSize:20, color:"#fff", textAlign: "center"}}>Never have I ever</Text>
		</View>
    )
}
const styles = StyleSheet.create({ 
    item6: {
        backgroundColor:"blue",
        flex:1
    }
});