import React, { useState, useEffect } from 'react';  
import { StyleSheet, View, Text, Alert, Modal, Pressable } from 'react-native';  
import { db } from '../../firebaseConfig';
import { addDoc, collection, getDocs, onSnapshot, query} from 'firebase/firestore';

export default function FirstDate() {
    const [modalVisible, setModalVisible] = useState(false);
    const [favoriteCard, setFavoriteCard] = useState('☆');
    const [card, setCard] = useState([])
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    useEffect(() => {
        const getData = async () => {
            const card = query(collection(db, "First date questions"));
        
            onSnapshot(card, (querySnapshot) => {
                let databaseInfo = [];
                
                querySnapshot.forEach((doc) => {
                    databaseInfo.push(doc.data().card);
                    
                });
                databaseInfo = shuffle(databaseInfo)
                // console.log(databaseInfo)
                
                setCard(databaseInfo)
            });
            }
        
            getData()
        }, [])
        function shuffle(array) {
            var currentIndex = array.length,
                temporaryValue: any,
                randomIndex: number;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
    }

        async function addFavorite(deck: string, cardData: any) {
            await addDoc(collection(db, deck), {
                card: cardData,
            });
        }

    return (

    <View style={styles.item5}>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Text style={styles.modalText}>{card[currentCardIndex]}</Text>
        <Pressable onPress={() => setFavoriteCard('⭐')}
        onPressIn={() =>addFavorite("Favorites", card[currentCardIndex])} >
            <Text style={styles.favorites}>{favoriteCard}</Text>
            </Pressable>
        <Pressable onPress={() => setCurrentCardIndex(currentCardIndex - 1)}
        >
        <Text style={[styles.button, styles.buttonNextCard,styles.textStyle]}>Last Card</Text></Pressable>
        <Pressable onPress={() => setCurrentCardIndex(currentCardIndex + 1)}
        onPressIn ={() => setFavoriteCard('☆')}>
        <Text style={[styles.button, styles.buttonNextCard,styles.textStyle]}>Next Card</Text></Pressable>
        <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Close Card</Text>
            </Pressable>
            </View>
        </View>
    </Modal>
    <Pressable
    onPress={() => setModalVisible(true)}>
    <Text style={{fontSize:20, color:"#fff", textAlign: "center"}}>First date questions</Text>
    </Pressable>
    </View>
    )
}
const styles = StyleSheet.create({ 
    item5: {
        backgroundColor:"pink",
        flex:1
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
},
    modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 105,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    },
    button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    },
    buttonOpen: {
    backgroundColor: '#F194FF',
    },
    buttonClose: {
    backgroundColor: '#2196F3',
    },
    textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    
    },
    modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 25
    },
    favorites: {
        fontSize: 30
    },
    buttonNextCard: {
        backgroundColor: 'pink'
    }
});