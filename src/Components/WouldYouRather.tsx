import React, { useState } from 'react';  
import { StyleSheet, View, Text, Alert, Modal, Pressable } from 'react-native';

export default function WouldYouRather () {
    const [modalVisible, setModalVisible] = useState(false);
    const [favoriteCard, setFavoriteCard] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    let cardArray = 
    ['Would you rather have a terrible boss but a great job or a great boss but a terrible job?', 'Would you rather be with a jealous partner or a distant one?', 'Would you rather have a time machine or a teleportation device?', 'Would you rather have quintuplets or have no kids?', 'Would you rather lose all of the money you’ve earned this year or lose all of the memories you’ve gained this year?', 'Would you rather lose all of your friends but win the lottery or keep your friends and stay broke?', 'Would you rather eat rotten eggs or drink sour milk?', 'Would you rather have a spouse that chews loudly or spits when they talk?', 'Would you rather have breakfast in bed or a midnight snack?', 'Would you rather give up dates or kisses?', 'Would you rather love your partner more or have them love you more?', 'Would you rather have to kiss every person you meet or never kiss your partner again?', 'Would you rather be immortal on a mortal planet or be mortal on an immortal planet?', 'Would you rather fly a kite or swing on a swing?', 'Would you rather go on a fun date or be given an expensive gift?', 'Would you rather have someone tell you the brutal truth or have them lie to protect your feelings?', 'Would you rather be popular, but have fake friends or be unpopular, but have real friends?', 'Would you rather have a giant tongue or giant feet?', 'Would you rather cuddle under the stars or cuddle under a blanket?', 'Would you rather be criticized or ignored?', 'Would you rather meet the love of your life in high school or at the age of 30?', 'Would you rather have your heart broken or be the heartbreaker?', 'Would you rather be feared by all or loved by all?', 'Would you rather live forever or be remembered forever?', 'Would you rather live with your partner in one town or be single and tour Europe?', 'Would you rather prefer not having a cell phone ever again or not being able to gossip again 😳?', 'Would you rather have one wish granted today or three wishes granted ten years from now?', 'Would you rather cheat or be cheated on?', 'Would you rather never get angry or never be envious?', 'Would you rather give up bathing for a month or give up the internet for a month?', 'Would you rather tell a lie for a good reason or tell the truth for a bad reason?', 'Would you rather be the oldest person in the office or the youngest?', 'Would you rather have unlimited pizza 🍕\xa0 for life or unlimited tacos 🌮\xa0 for life?', 'Would you rather go out for date night or do date night at home?', 'Would you rather be happy, wealthy, or healthy?', 'Would you rather be magical, but live on earth, or live in a magical land but be normal?', 'Would you rather work in Los Angeles or in New York City?', 'Would you rather have a golden voice or a silver tongue?', 'Would you rather donate your body to science or donate your organs to people who need them?', 'Would you rather have nosy parents or strict parents?', 'Would you rather live to 150 but have a boring life or live to 50 but have a really exciting life?', 'Would you rather go watch a movie or go watch the sunset?', 'Would you rather lose all your money and valuables or lose all the pictures you have ever taken?', 'Would you rather eat the oldest thing in the office fridge or clean the office bathroom with just toilet paper?', 'Would you rather be able to speak every language on Earth or communicate with aliens?', 'Would you rather sneak out of the house or miss a party that the most popular person in school invited you to?', 'Would you rather be completely invisible for one day or be able to fly for one day?', 'Would you rather be able to see 10 minutes into your own future or be able to see someone else’s entire future anytime you want?', 'Would you rather have a million dollars in pennies or a hundred million dollars worth of ice cream?', 'Would you rather be completely bald or covered from head to toe with hair?', 'Would you rather have out-of-control body hair or out-of-control body odor?', 'Would you rather cook dinner with your partner or have your partner cook dinner for you?', 'Would you rather have only one best friend for the rest of your life or have 10 best friends that live in other countries?', 'Would you rather be famous in your career field or celebrity famous?', 'Would you rather be an only child or have ten siblings?', 'Would you rather listen to an annoying laugh for a whole day or get tickled for one hour?', 'Would you rather all the chats on your phone leak or all the photos?', 'Would you rather never age physically or never age mentally?', 'Would you rather have unlimited respect or unlimited power?', 'Would you rather be known for your intelligence or for your good looks?', 'Would you rather eat out by yourself or eat at home with your family?', 'Would you rather live on the beach or in a cabin in the woods?', 'Would you rather forgive or forget?', 'Would you rather read a romantic novel together or watch a romantic movie together?', 'Would you rather travel the world for a year, all expenses paid or have $40,000 to spend on whatever you want?', 'Would you rather give up social media or eat the same dinner for the rest of your life?', 'Would you rather slow dance with your partner or dance to a fast beat?', 'Would you rather walk barefoot in a public restroom 🤢 or get food poisoning 🤮?', 'Would you rather babysit a crying infant for a day or have an unwanted houseguest for a week?', 'Would you rather be the funniest person or the smartest person in the room?', 'Would you rather prepare your own lunch or have snack boxes delivered to your workplace?', 'Would you rather spend a year on Mars by yourself or party on a remote island with your friends?', 'Would you rather it’s Christmas every day or your birthday every day?', 'Would you rather be Prom King/Queen 👸🏻🤴🏼 or valedictorian 👩🏼\u200d🎓?', 'Would you rather never have homework again or be paid to do your homework?', 'Would you rather date someone with their ex’s name tattooed on their chest or date someone whose ex lives next door?', 'Would you rather live the rest of your life as a monk or followed continuously by paparazzi?', 'Would you rather never play video games again or never use your favorite mobile app again?', 'Would you rather never be stuck in traffic again or never get another cold?', 'Would you rather be trapped in a romantic comedy with your enemies or trapped in a horror tv show with your friends?', 'Would you rather become an adult overnight or stay a teenager forever?', 'Would you rather be able to change the future or change the past?', 'Would you rather you out-earn your partner or have them out-earn you?', 'Would you rather outlive your partner or have them outlive you?', 'Would you rather lose your passport or smartphone?', 'Would you rather have your dream job and be unable to retire in 50 years or have a terrible job but get to retire in 10 years?', 'Would you rather have an office where you could wear pajamas to work or work in a really fancy office?', 'Would you rather climb the highest mountains or swim the deepest seas?', 'Would you rather be in an unbalanced relationship where you love them more or they love you more?', 'Would you rather scream at each other or give each other the silent treatment?', 'Would you rather run a country or a business?', 'Would you rather go out for fine dining or order pizza and watch Netflix?', 'Would you rather find your true love or find a suitcase with 5 million dollars inside?', 'Would you rather be a leader or a follower?', 'Would you rather someone read your diary or someone read your text messages?', 'Would you rather exercise together or watch a movie together?', 'Would you rather take a vow of silence or a vow of celibacy for your entire life?', 'Would you rather be the hero that saved the girl or the villain that took over the world?', 'Would you rather be friends with Oprah or Simon Cowell?', 'Would you rather have more time or more money?', 'Would you rather have a kiss every day or a hug every day?', 'Would you rather have a completely automated home or a self-driving car?', ' Would you rather have super sensitive taste buds or super sensitive hearing?', 'Would you rather have an unlimited gift card to a restaurant or a clothing store?', 'Would you rather never be stuck in traffic again or never get another cold?', 'Would you rather be able to slide down rainbows or jump on the clouds?', 'Would you rather skip class or have a 2-hour-recess at school?', 'Would you rather relive the same day repeatedly for a year or lose a year of your life?', 'Would you rather write a love letter or get a love letter 💌?', 'Would you rather be stuck on an island for eternity all on your own or with someone you hate?', 'Would you rather talk like Darth Vader or speak in the language of the Middle Ages?', 'Would you rather be good at any new skill you try or work with the same skills and specialize in your work?', 'Would you rather be able to visit the stars or discover a treasure on Earth?', 'Would you rather smell like onions or garlic?', 'Would you rather be a kid your whole life or an adult your whole life?', 'Would you rather be braver than most people or be able to fly?', 'Would you rather have a weird-looking smile or a weird-sounding laugh?', 'Would you rather be a detective 🕵🏼\xa0 or a pilot 👨🏻\u200d✈️?', 'Would you rather find out your partner hates dogs or that they cheated on their ex?', 'Would you rather work an extra hour, but get an hour of break time or work with no breaks, but leave an hour earlier?', 'Would you rather sing to your partner or play him a song on a musical instrument?', 'Would you rather be on an airplane between two arguing passengers or sit next to a screaming infant?', 'Would you rather have a name everyone misspells or a name everyone forgets?', 'Would you rather do something you love and make just enough money to get by or do something you hate but make billions of dollars?', 'Would you rather speak to animals or speak 10 foreign languages?', 'Would you rather have a skin that changes color based on your emotions or tattoos that appear all over your body whenever you are dishonest?', 'Would you rather marry someone who doesn’t love you or marry someone you do not love?', 'Would you rather be a wizard 🧙🏼 or a superhero?', 'Would you rather have to listen to only Justin Bieber or only Ariana Grande for the rest of your life?', 'Would you rather spend a year as a cop or as a teacher in an inner-city neighborhood?', 'Would you rather get stuck in an elevator with your ex or with your partner and their ex?', 'Would you rather live a long life in poverty or a short life with wealth?', 'Would you rather be filthy rich and live 400 years ago or be poor but live today?', 'Would you rather go skiing or go to a water park?']

    let currentCard = cardArray[0]

    return (

    <View style={styles.item4}>
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
    <Text style={{fontSize:20, color:"#fff", textAlign: "center"}}>Would you rather</Text>
    </Pressable>
    </View>
    )
}
const styles = StyleSheet.create({ 
    item4: {
		backgroundColor:"red",
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
            backgroundColor: 'pink',
            
        }
});