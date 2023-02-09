import React, { Component } from 'react';  
import { StyleSheet, View, Text} from 'react-native';

export default function FirstDate() {

    return (

        <View style={styles.item5}>
		<Text style={{fontSize:20, color:"#fff", textAlign: "center"}}>First date questions</Text>
		</View>
    )
}
const styles = StyleSheet.create({ 
    item5: {
        backgroundColor:"pink",
        flex:1
    },
});