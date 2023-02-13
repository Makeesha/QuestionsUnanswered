import React, { Component, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import About from './src/Components/About';
import HowToPlay from './src/Components/HowToPlay';
import ThisOrThat from './src/Components/ThisOrThat';
import MostLikelyTo from './src/Components/MostLikelyTo';
import Icebreakers from './src/Components/Icebreakers';
import WouldYouRather from './src/Components/WouldYouRather';
import FirstDate from './src/Components/FirstDate';
import NeverHaveIEver from './src/Components/NeverHaveIEver';
import ModelTest from './src/Components/Favorites';
import Logo from './src/Components/Logo';
import { db } from './firebaseConfig';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';


export default function App() {
	
    // async function getCard () {
    //     let totQueryList = []
    //     const querySnapshot = await getDocs(collection(db, "This or That"));
    //     querySnapshot.forEach((doc) => {
    //     totQueryList.push(doc.data().card)
    //     console.log(totQueryList)
    //     const totArray = totQueryList
       
    //     return totArray[0]
    // });}
    // const docRef = await addDoc(collection(db, "TESTING"), {
    //     card: "You're the best!",
        
    //   });
    // console.log("Document written with ID: ", docRef.id);

    // const deleteCard = await deleteDoc(doc(db, "TESTING", "Tokyo"));
    // deleteCard
	return (
		
		<View style={styles.container}>
		<View style={styles.logo}>
        <Logo></Logo>
        </View>
        <View style={styles.cardContainer}></View>
        <ModelTest></ModelTest>
        <About></About>
        <HowToPlay></HowToPlay>


		<ThisOrThat></ThisOrThat>
		<MostLikelyTo></MostLikelyTo>
		<Icebreakers></Icebreakers>
		<WouldYouRather></WouldYouRather>
		<FirstDate></FirstDate>
		<NeverHaveIEver></NeverHaveIEver>
        
		</View>

);
}

const styles = StyleSheet.create({
	
	container: {
		flex:1,
		justifyContent:"center",
		backgroundColor:"#fff",
		alignItems:"stretch",
        flexDirection: "column"
		},
		title: {
		fontSize:20,
		color:"#fff",
		justifyContent:"center",
        
		},
        
        text: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        },
        
        cardContainer: {
            flex:1,
		justifyContent:"center",
		backgroundColor:"#fff",
		alignItems:"stretch",
        flexDirection: "column"
		},

        logo: {
            alignSelf: "center"
        }

    
		
		});

