import React, { Component } from 'react';  
import { StyleSheet, View, Text} from 'react-native';

export default function WouldYouRather () {

    return (

        <View style={styles.item4}>
		<Text style={{fontSize:20, color:"#fff", textAlign: "center"}}>Would you rather</Text>
		</View>
    )
}
const styles = StyleSheet.create({ 
    item4: {
		backgroundColor:"red",
		flex:1
		},
});