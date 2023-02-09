import React, { Component } from 'react';  
import { StyleSheet, View, Text} from 'react-native';  
// import { db } from '../../firebaseConfig';
// import { collection, getDocs } from 'firebase/firestore';

export default function ThisOrThat () {
	// const [cardDeck, SetCardDeck] = useState([]);
	// const pullCard = () => {
	// 
   
//     const querySnapshot = await getDocs(collection(db, "This or That"));
//     querySnapshot.forEach((doc) => {
//     console.log(`${doc.data().card}`);
// });
    
    return (
    <View style={styles.item1}>
    <Text style={{fontSize:20, color:"#fff", textAlign: "center"}} >This or That</Text>
    </View>
    );
}
    
    
const styles = StyleSheet.create({  
    item1: {
		backgroundColor:"orange",
		flex:1
		},
    });