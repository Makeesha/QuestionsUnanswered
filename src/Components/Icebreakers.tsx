import React, { Component } from 'react';  
import { StyleSheet, View, Text} from 'react-native';

export default function Icebreakers() {

    return (

        <View style={styles.item3}>
		<Text style={{fontSize:20, color:"#fff", textAlign: "center"}}>Icebreakers</Text>
		</View>
    )
}
const styles = StyleSheet.create({ 
    item3: {
		backgroundColor:"green",
		flex:1
		},
});