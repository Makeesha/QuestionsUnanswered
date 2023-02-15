import React, {useState, useEffect} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, onSnapshot, query, doc, deleteDoc,} from 'firebase/firestore';

export default function Favorites() {
    const [modalVisible, setModalVisible] = useState(false);
    const [card, setCard] = useState([])
    const [currentCardIndex, setCurrentCardIndex] = useState(1);
    const [ids, setIds] = useState([]);
    
// useEffect(() => {
//     if(currentCardIndex < 1)
//     setCurrentCardIndex(1)
//     if(currentCardIndex > card.length-1)
//     setCurrentCardIndex(card.length-1)
// });
useEffect(() => {
    const getData = async () => {
        const card = query(collection(db, "Favorites"));
    
        onSnapshot(card, (querySnapshot) => {
            const databaseInfo = [];
            const dataIds = []
            
            querySnapshot.forEach((doc) => {
                databaseInfo.push(doc.data().card);
                dataIds.push(doc.id)
        
            });
            // console.log(databaseInfo)
            setCard(databaseInfo)
            setIds(dataIds)
        });
        }
    
        getData()
    }, [])

    function deleteCard(deck: string, cardId: string) {
        const docRef = doc(db, deck, cardId)
        deleteDoc(docRef)
        .then (() => {
            console.log("Entire document has been deleted successfully.")
        })
        .catch(error => {
            console.log(error);
        })
        
        // await deleteDoc(doc(db, deck, cardData));
    }
    

    return (
    
    <View style={styles.centeredView}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
        }}>
    
        <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Text style={styles.modalText}>{card[currentCardIndex]}
        </Text>
        <View style={styles.buttonsContainer}>
        <Pressable onPress={() => setCurrentCardIndex(currentCardIndex - 1)}>
        <Text style={[styles.button, styles.buttonNextCard, styles.textStyle]}>Last Card</Text></Pressable>
        <Pressable onPress={() => setCurrentCardIndex(currentCardIndex + 1)}>
        <Text style={[styles.button, styles.buttonNextCard,styles.textStyle]}>Next Card</Text></Pressable>
        </View>
        <View style={styles.buttonCloseContainer}>
            <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>X Close</Text>
            </Pressable>
            </View>
            <View style={styles.buttonDeleteContainer}>
            <Pressable onPress={() => deleteCard("Favorites", ids[currentCardIndex])}>
        <Text style={[styles.button, styles.buttonDeleteCard,styles.textStyle, styles.buttonsContainer]}>🗑️ Delete</Text></Pressable>
        </View>
        </View>
        </View>
    
        </Modal>
        <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>⭐ Favorite Cards</Text>
        </Pressable>
    </View>
    )};



const styles = StyleSheet.create({
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
  buttonNextCard: {
      backgroundColor: 'pink'
  },
  buttonDeleteCard: {
    backgroundColor: "#cd5c5c"
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonDeleteContainer: {
    bottom: 10,
    position: "absolute"
  },
  buttonCloseContainer: {
    top: 10,
    position: 'absolute',
  }
});
