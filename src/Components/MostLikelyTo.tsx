import React, { Component } from 'react';  
import { StyleSheet, View, Text} from 'react-native';

export default function MostLikelyTo () {

    return (

        <View style={styles.item2}>
		<Text style={{fontSize:20, color:"#fff", textAlign: "center", fontWeight: 'bold',}}>Most likely to</Text>
		</View>
    )
}
const styles = StyleSheet.create({ 
item2: {
    backgroundColor:"purple",
    flex:1
    },
});