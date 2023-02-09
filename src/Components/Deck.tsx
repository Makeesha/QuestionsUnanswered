import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from '../../firebaseConfig';




const Deck = async () => {
    // const [getDeck, setGetDeck] = useState([]);
    // const pullCard => () {
        const querySnapshot = await getDocs(collection(db, "This or That"));
        querySnapshot.forEach((doc) => {
        console.log(`${doc.data().card}`);
    });
}

export default Deck;