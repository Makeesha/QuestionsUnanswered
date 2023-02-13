import React, { useState } from 'react';  
import { StyleSheet, View, Text, Alert, Modal, Pressable} from 'react-native';

export default function FirstDate() {
    const [modalVisible, setModalVisible] = useState(false);
    const [favoriteCard, setFavoriteCard] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    let cardArray = 
    ['How many other countries have you visited?', 'What’s your favorite piece of furniture you’ve ever owned?', 'If you could send one letter to yourself in the past without the goal of making yourself rich (no lotto numbers, stock picks, etc.), what age would you choose and what would the letter say?', 'Who is the most bizarre person you’ve met?', 'Where would you move if you could move anywhere in the world and still find a job and maintain a reasonable standard of living?', 'What’s your favorite band NAME (not necessarily your favorite band)?', 'Cutest animal? Ugliest animal?', 'What skill or ability have you always wanted to learn?', 'If you knew you were going to die in a year, what would you change about how you live?', 'What’s the best road trip you’ve been on?', 'What’s the most recent thing you’ve done for the first time?', 'Who is the kindest person you know?', 'What’s the most essential part of a friendship?', 'What friendship you’ve had has impacted you the most?', 'Where is the most fun place around where you live?', 'Who is your favorite author?', 'What do you miss about life 10 or 20 years ago?', 'What’s your favorite app on your phone?', 'What’s your favorite quote or saying?', 'All modesty aside, what are you better at than 90% of people? It doesn’t have to be useful or serious, it can be something ridiculous.', 'What’s your favorite holiday?', 'If you could go back in time as an observer, no one could see you, and you couldn’t interact with anything, when would you want to go back to?', 'How well do you cope when you don’t have your phone with you for an extended period of time?', 'What’s the best meal you’ve ever had?', 'What TV shows did you watch when you were a kid?', 'What habit do you wish you could start?', 'What nicknames have you had throughout your life?', 'Who besides your parents taught you the most about life?', 'What’s your favorite alcoholic and non-alcoholic drink?', 'What has been the best period of your life so far?', 'What did you do last summer?', 'What are some accomplishments that you are really proud of?', 'Where was your favorite place to go when you were a kid?', 'What country do you never want to visit?', 'Among your friends, what are you best known for?', 'What really cheesy song do you love?', 'What would you do with the extra time if you never had to sleep?', 'What’s the best way to get to know who someone really is?', 'How did you come to love one of your favorite musicians?', 'What’s something that most people haven’t done, but you have?', 'What fad or trend have you never been able to understand?', 'How did you meet your best friend?', 'What’s your go-to funny story?', 'What would you do if had enough money to not need a job?', 'What’s your favorite smell?', 'What amazing adventures have you been on?', 'Best and worst flavor ice cream? What would make for an excellent new ice cream flavor?', 'What household chore is just the worst?', 'When do you feel most out of place?', 'Who is the best role model a person could have?', 'What’s your favorite thing to do outdoors? How about indoors?', 'What are the top three social situations you try to avoid most?', 'What are some things everyone should try at least once?', 'What’s the last new thing you tried?', 'What’s the best thing that has happened to you this month?', 'Where’s the last place you’d ever go?', 'What hobbies would you like to get into if you had the time and money?', 'Would you rather have an incredibly fast car or incredibly fast internet speed?', 'What’s the strangest phone conversation you’ve ever had?', 'Where would you like to retire?', 'What’s your favorite restaurant?', 'What took you way too long to figure out?', 'What’s the most spontaneous thing you’ve done?', 'What’s been the most significant plot twist in your own life?', 'What do you do to unwind?', 'What are your top 3 favorite things to talk about?', 'If you could instantly receive a Ph.D. in any discipline including all the knowledge and experience that goes along with it, what would your Ph.D. be in?', 'What’s the most ridiculous thing you’ve done because you were bored?', 'What’s getting worse and worse as you get older? What’s getting better and better as you get older?', 'What pets have you had?', 'Where’s the strangest place you’ve ever been?', 'If you opened a business, what type of business would you start?', 'Besides your home and your work, where do you spend most of your time?', 'What would your perfect vacation look like?', 'Are you more of an indoors or outdoors person?', 'How often do you dance? Silly/ironic dancing counts.', 'When was the last time you walked for more than an hour?', 'On a weekend or holiday, what’s the best time of day and the best time of night?', 'If you could give everyone just one piece of advice, what would it be?', 'What fad did you never really understand?', 'What small things brighten up your day when they happen?', 'What are some obscure things that you are or were really into?', 'What are people often surprised to learn about you?', 'When are you the most “you” that you can be? In other words, when do you feel most like yourself?', 'If you had the power to change one law, what law would you change?', 'What was the last book you really got into?', 'What’s the worst movie you’ve ever seen?', 'What music artist do you never get tired of?', 'What would you like to know more about, but haven’t had the time to look into it?', 'What sports would be funniest if the athletes had to be drunk while playing?', 'When you were a kid, what seemed like the best thing about being a grown up?', 'If you could give yourself a nickname, what nickname would you want people to call you?', 'Who’s your favorite character from a TV show, movie, or book?', 'What companies have made you so mad that you would rather suffer bodily harm than give them any more of your money?', 'What did you do for (last holiday)? Or What will you do for (next closest holiday)?', 'Before you make a call, do you rehearse what you are going to say?', 'What’s your go-to series or movie when you want to watch something but can’t find anything to watch?', 'What would be the best city to live in?', 'What says the most about a person?', 'Is there any art or artist you are really into?', 'Have you ever joined any meetup groups?', 'What’s happening now, that in 20 years people will look back on and laugh about?', 'If you unexpectedly won $10,000, what would you spend it on?', 'What’s something you’re interested in that most people wouldn’t expect?', 'What’s expensive but totally worth it?', 'What wrong assumptions do people make about you?', 'What places have you visited that exceeded your expectations?', 'What do you do differently than most people?', 'What machine or appliance in your house aggravates you the most?', 'What are you most grateful for?', 'What’s the worst or best job you’ve had?', 'What do you care least about?', 'What would your perfect morning be like?', 'What do you never get tired of?', 'How have you changed from when you were in high school?', 'What’s your favorite international food?', 'What would be your dream job?', 'What are you looking forward to that’s happening soon?', 'What’s the worst advice someone has given you?', 'What are some movies you really enjoyed?', 'What’s the most relaxing situation you could imagine?', 'What is the most beautiful view you’ve seen?', 'What’s the silliest fear you have?', 'What small seemingly insignificant decision had a massive impact on your life?', 'What are you kind of obsessed with these days?', 'When was the last time you sang to yourself or to someone else?', 'If you found a briefcase filled with $1 million in $100 bills in front of your door, what would you do with it?', 'Do you prefer to work in a team or alone?', 'Are you a morning person or a night owl?', 'If you could have the answer to any one question, what question would you want the answer to?', 'How many siblings do you have?', 'How much social interaction is too much?', 'Where’s the best place in (your town or city) to have a picnic?', 'Where have you traveled?', 'What’s the most interesting fact you know?', 'Who’s your favorite actor or actress?', 'What was the last show you binge-watched?', 'How different do you act when you are with acquaintances vs. people you are comfortable with?', 'Where did you take family vacations to when you were younger?', 'If the company you work for / the college you go to had an honest slogan, what would it be?', 'What were some of the turning points in your life?', 'What were some of the happiest times of your life so far?', 'What do you like but are kind of embarrassed to admit?', 'What are you always game for?', 'If there was an Olympics for everyday activities, what activity would you have a good chance at winning a medal in?', 'Would you like to be famous? (If yes, what would you want to be famous for? If no, why not?)', 'What odd talent do you have?', 'How techie are you?', 'What do you like to do in your free time?', 'If you lived to 100, would you rather keep the body or the mind of yourself at 30 until you were 100?', 'Would you rather live full time in an RV or full time on a sailboat?', 'What fact floored you when you heard it?', 'What’s the strangest way you’ve become friends with someone?', 'How much personal space do you need to be comfortable?', 'What TV series do you keep coming back to and re-watching?', 'What’s the most amount of people you had to present something in front of?', 'Where would your friends or family be most surprised to find you?', 'What’s the hardest you’ve worked for something?', 'Who are your kind of people?', 'Who is the most fascinating person you’ve met?']
    
    let currentCard = cardArray[0]

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