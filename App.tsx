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
import ModelTest from './src/Components/ModelTest';
import Logo from './src/Components/Logo';
// import Card from './src/Components/Card';


export default function App() {
	
    	
	return (
		
		<View style={styles.container}>
		
        <Logo></Logo>
        <About></About>
        <HowToPlay></HowToPlay>
		
        <ModelTest></ModelTest>
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
		alignItems:"stretch"
		},
		title: {
		fontSize:20,
		color:"#fff",
		justifyContent:"center",
        
		},
        
          text: {
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold',
          },
		
		});

