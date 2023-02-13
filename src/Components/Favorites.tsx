import React, {useState, useEffect} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, getDocs, onSnapshot, query } from 'firebase/firestore';

export default function Favorites() {
    const [modalVisible, setModalVisible] = useState(false);
    const [info, setInfo] = useState([])
    const [ids, setIds] = useState([])
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

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
            console.log(databaseInfo)
            setIds(dataIds)
            setInfo(databaseInfo)
        });
        }
    
        getData()
    }, [])


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
        {info.map((data, index)=> 
        <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <Text style={styles.modalText} key={ids[index]}>{data}</Text>
            <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Close Card</Text>
            </Pressable>
          </View>
        </View>
        )}
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}> Favorites</Text>
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
});
