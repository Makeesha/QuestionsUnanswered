import React, { useState } from 'react';  
import { StyleSheet, View, Text, Alert, Modal, Pressable } from 'react-native';  
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default  function ThisOrThat () {
    const [modalVisible, setModalVisible] = useState(false);
    const [favoriteCard, setFavoriteCard] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);


       // function shuffle(array) {
    //     var currentIndex = array.length,
    //         temporaryValue: any,
    //         randomIndex: number;
    //     // While there remain elements to shuffle...
    //     while (0 !== currentIndex) {
    //         // Pick a remaining element...
    //         randomIndex = Math.floor(Math.random() * currentIndex);
    //         currentIndex -= 1;
    //         // And swap it with the current element.
    //         temporaryValue = array[currentIndex];
    //         array[currentIndex] = array[randomIndex];
    //         array[randomIndex] = temporaryValue;
    //     }
    //     return array;
    // }
    

    let cardArray= 
    ['Roses or tulips?', 'TikTok or Instagram?', 'Mop or vacuum?', 'To give or to receive?', 'Indoor or outdoor?', 'Motorcycle or bicycle?', 'Mom or dad?', 'Dark chocolate or milk chocolate?', 'Fabric or leather?', 'Oranges or apples?', 'Coffee or tea?', 'Sunrise or sunset?', 'Sun or moon?', 'Pink or blue?', 'Dress or skirt?', 'Lobster or crab?', 'Cookies or chips?', 'Pirates or ninjas?', 'Driver or passenger?', 'Unicorn or dragon?', 'Smart or kind?', 'Trucks or cars?', 'Cable or satellite?', 'Ice or fire?', 'Pudding or Jello?', 'Physical books or eBooks?', 'Suitcase or backpack?', 'Singing or dancing?', 'Sugar or spice?', 'Pants or shorts?', 'Chess or checkers?', 'Single player or multiplayer?', 'Shoes or slippers?', 'Coke or Pepsi?', 'House or apartment?', 'Fruits or vegetables?', 'AC or fan?', 'Weekends or weekdays?', 'Dine in or dine out?', 'Flats or heels?', 'Sweet or salty?', 'Piano or guitar?', 'Basketball or football?', 'Love or money?', 'Wall clock or table clock?', 'Big or small?', 'Movies or TV shows?', 'Europe or Asia?', 'Almonds or peanuts?', 'Swimming pool or beach?', 'Drama or Fantasy?', 'Blinds or drapes?', 'Onion rings or French fries?', 'Facebook or Instagram?', 'Bowling or golf?', 'Hawaii or Alaska?', 'Limited or unlimited?', 'Iced coffee or hot coffee?', 'Pop or reggae?', 'Salsa or sour cream?', 'Outback or Texas Roadhouse?', 'New phone or new clothes?', 'Rustic or modern?', 'Yacht or jet ski?', 'Cash or cards?', 'Soft or hard?', 'Rain or snow?', 'Cheesy or chili?', 'Day or night?', 'Tattoo or piercings?', 'Soda or juice?', 'River or lake?', 'Angels or vampires?', 'Old or new?', 'Doctor or nurse?', 'Summer or winter?', 'Hot or cold?', 'Wings or ribs?', 'Black or white?', 'Vanilla or chocolate?', 'Bed or sofa?', 'Laptop or tablet?', 'Handwritten or typed?', 'Comedy or Horror?', 'Manicure or pedicure?', 'Board games or card games?', 'Spring or fall?', 'Batman or Superman?', 'Sweater or T-shirts?', 'Electric stove or gas stove?', 'Gym or spa?', 'Beer or wine?', 'Xbox or Nintendo?', 'Hamburgers or hotdogs?', 'Past or present?', 'Pork or beef?', 'Music festival or art festival?', 'With make-up or without make-up?', 'Boiled egg or fried egg?', 'Text or call?', 'Salad or soup?', 'Soft or hard tacos?', 'Curly or straight?', 'Comb or brush?', 'Pizza or pasta?', 'iOS or Android?', 'Waffle or pancake?', 'Playlists or podcasts?', 'Introvert or extrovert?', 'Book or movie?', 'Gold or diamond?', 'Lunch or dinner?', 'Altoids or Tic-tac?', 'Beauty or brains?', 'Asia or Europe?', 'Necklace or bracelet?', 'Sausage or bacon?', 'Wet or dry?', 'Chrome or Safari?', 'Truth or dare?', 'Run or bike?', 'Nike or Adidas?', 'Movie date or dinner date?', 'Cats or dogs?', 'Long or short hair?', 'Wasps or bees?', 'Nuggets or fries?', 'Cinderella or Snow White?', 'Pig or goat?', 'Shaving or waxing?', 'Too much sleep or little sleep?', 'Math or Science?', 'Public or private?', 'Friends or family?', 'Farm or city?', 'Train or plane?', 'Salt or pepper?', 'Casual or formal?', 'Ice cream or cake?', 'Samsung or iPhone?', 'Iron Man or Captain America?', 'Sand or grass?', 'Stop or go?', 'Rock or country?', 'Jeans or leggings?', 'Justice League or Avengers?', 'Reading or writing?'];

    let currentCard = cardArray[0]
    

    return (

    <View style={styles.item1}>
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
        <Text style={styles.modalText}>{cardArray[currentCardIndex]}</Text>
        
        <Pressable onPress={() => setFavoriteCard(!favoriteCard)}>
            <Text style={styles.favorites}>{favoriteCard ? '⭐':'☆'}</Text></Pressable>
            <Pressable onPress={() => setCurrentCardIndex(currentCardIndex - 1)}>
        <Text style={[styles.button, styles.buttonNextCard,styles.textStyle]}>Last Card</Text></Pressable>
        <Pressable onPress={() => setCurrentCardIndex(currentCardIndex + 1)}>
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
    <Text style={{fontSize:20, color:"#fff", textAlign: "center"}} >This or That</Text>
    </Pressable>
    </View>
    )
}   
    
const styles = StyleSheet.create({  
    item1: {
		backgroundColor:"orange",
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
