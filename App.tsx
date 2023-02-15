import React, { Component, useState, useRef } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, SafeAreaView, Text } from 'react-native';
import About from './src/Components/About';
import HowToPlay from './src/Components/HowToPlay';
import ThisOrThat from './src/Components/ThisOrThat';
import MostLikelyTo from './src/Components/MostLikelyTo';
import Icebreakers from './src/Components/Icebreakers';
import WouldYouRather from './src/Components/WouldYouRather';
import FirstDate from './src/Components/FirstDate';
import NeverHaveIEver from './src/Components/NeverHaveIEver';
import YesOrNo from './src/Components/YesOrNo';
import Favorites from './src/Components/Favorites';
import Logo from './src/Components/Logo';
import Reflection from './src/Components/Reflection';
import Couples from './src/Components/Couples';



export default function App() {
        
 
	return (
		
		<SafeAreaView style={styles.container}>
		<View style={styles.logo}>
        <Logo></Logo>
        </View>
        <ScrollView 
        style={styles.ScrollView}>
        <View style={styles.dataContainer}>
        <About></About>
        <HowToPlay></HowToPlay>
        <Favorites></Favorites>
    
        <View style={styles.deckContainer}>
        <View style={styles.deck}>
        <WouldYouRather></WouldYouRather></View>
        <View style={styles.deck}>
		<ThisOrThat></ThisOrThat></View>
        <View style={styles.deck}>
        <Couples></Couples></View>
        <View style={styles.deck}>
        <MostLikelyTo></MostLikelyTo></View>
        <View style={styles.deck}>
        <FirstDate></FirstDate></View>
        <View style={styles.deck}>
        <Reflection></Reflection></View>
        <View style={styles.deck}>
        <Icebreakers></Icebreakers></View>
        <View style={styles.deck}>
        <NeverHaveIEver></NeverHaveIEver></View>
        <View style={styles.deck}>
        <YesOrNo></YesOrNo></View>
        </View>
        <Text style={styles.footer}>Made with 💕 by Makeesha</Text>
        </View>
        </ScrollView>
        </SafeAreaView>
		
    )

    }


const styles = StyleSheet.create({
	
	container: {
		justifyContent:"center",
		backgroundColor:"#fff",
    
	    },
        dataContainer: {
        flex: 1,
		justifyContent:"center",
		backgroundColor:"#fff",
        flexDirection: "column",
        paddingBottom: 130,
        
		},
        deckContainer: {
        flex:1,
		justifyContent:"center",
		backgroundColor:"#fff",
        flexDirection: "row",
        flexWrap: "wrap"
        },

        logo: {
            alignSelf: "center",   
        },
        deck: {
            width: 155,
            height: 155,
            margin: 6,
    
        },
        ScrollView: {
            marginHorizontal: 20,
        },
        footer: {
            color: "black",
            fontWeight: 'bold',
            textAlign: 'center',
        }
    });

