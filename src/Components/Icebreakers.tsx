import React, { useState } from 'react';  
import { StyleSheet, View, Text, Alert, Modal, Pressable} from 'react-native';

export default function Icebreakers() {
    const [modalVisible, setModalVisible] = useState(false);
    const [favoriteCard, setFavoriteCard] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);



    let cardArray = 
    ['What website or app doesn’t exist, but you really wish it did?', 'How well do you know your neighbors?', 'What’s your favorite Olympic sport to watch?', 'What scene in a movie always gives you goosebumps every time you watch it?', 'What household chore do you actually enjoy?', 'Who was your favorite teacher?', 'What’s the worst advice you’ve been given?', 'What’s\xa0something you’re looking forward to?', 'If you could choose your dreams, what would you prefer to dream about?', 'What’s something that was once important but is now becoming less and less relevant?', 'What’s the best location to fully enjoy a good cup of coffee?', 'How could carousels be spiced up so they are more exciting?', 'What is the most unique or silliest problem you have going on in your life at the moment?', 'What’s your favorite line from a book or a movie?', 'Who is the oldest person you know personally? What interesting stories have they told you?', 'What has taken you the longest to get good or decent at?', 'What do you buy way more of than most people?', 'What was the scariest movie you’ve seen?', 'What, in your opinion, is the most amazing animal?', 'If a new volcano formed and the government had an online contest to see what it would be named, what name would you submit?', 'How did you spend the money from your very first job?', 'What’s your favorite way to spend time outdoors?', 'Where are five places you really want to visit before you die?', 'What toy did you hate most as a child?', 'What’s your favorite international food?', 'What is something you do better than most people and something you do worse than most people?', 'If you could start a charity, what would it be for?', 'Who is the funniest person in your family?', 'Would you ever try space tourism, if you had the money for it?', 'What kind of challenges are you facing these days?', 'What’s something that a lot of people are missing out on because they don’t know about it?', 'What did your teachers and parents say would be really important when you grew up, but it hasn’t been?\xa0', 'What tells you the most about a person?', 'What hobby would you be a lot of fun to get into?', 'What kind of physical activities do you like doing?', 'What’s the most amazing natural occurrence you’ve witnessed?', 'What do you wish someone taught you a long time ago?', 'What is the best thing you have ever bought?', 'What’s a problem you have, that might be entirely unique to you?', 'What was the craziest theme park or fair ride you’ve been on?', 'What’s the biggest vehicle you’ve driven?', 'What was the funniest thing you’ve seen recently online?', 'What rule do you wish they would introduce into your favorite sport?', 'What is the most stressful TV show or movie you watched?', 'What are you hilariously bad at?', 'When is the most interesting period in history?', 'What’s your favorite food combination?', 'What skill or talent would you most like to learn?', 'What are some of your guilty pleasures?', 'What weird quirks did you pick up from your parents?', 'What well-known person does the most good for the world?', 'What hard time in your life left you a better person after it was finished?', 'What’s your idea of a great day?', 'What brands do you love/hate the most?', 'What are you kind of snobby about?', 'How do you usually get your news?', 'What fashion trend needs to be brought back?', 'What about becoming an\xa0adult caught you completely off guard?', 'What’s your favorite way to waste time online?', 'What card or board games do you like to play?', 'What’s the weirdest way you have met someone?', 'What does your perfect breakfast look like?', 'Who is the most gifted person you know?', 'What is the most clever or funniest use of advertising you’ve seen?', 'What are you grateful for?', 'What topic could you give a 20-minute presentation on without any preparation?', 'What are some of your favorite scenes from movies?', 'What were your favorite television shows when you were growing up?', 'What do you do to unwind after a hard day?', 'What do you highly recommend to most people you meet?', 'What assumption you made went hilariously wrong?', 'What’s the best backhanded compliment you’ve heard / can think of on the spot?', 'Would you ride in a zeppelin if given a chance?', 'What’s the best way to stay young?', 'How did you get that scar of yours?', 'What’s your favorite island that you’ve visited?', 'Who is the most competitive person you know?', 'What do you resent paying for most?', 'What are some of the dumbest misadventures you’ve been on?', 'What do you geek out about?', 'What do you rebel against?', 'What’s the most outdated piece of tech you still use regularly?', 'Are you more productive at night or in the morning? Do you think it’s possible to change and get used to another schedule?', 'What is the best event you’ve attended?', 'What is the best pair of shoes you have owned?', 'What are common misconceptions about your job?', 'Besides war and diplomacy, what would be the best way for countries to settle disputes?', 'What movie never gets old no matter how many times you’ve seen it?', 'What’s your favorite car that you’ve owned?', 'What culture would you like to learn more about?', 'What TV show are\xa0you hooked on or were recently hooked on?', 'What’s the best or worst prank you’ve played on someone?', 'Tell me about a time you were totally out of your element/comfort zone.', 'What period would be the best to be born in?', 'What wastes the most time in your day to day life?', 'What would you change if you were in charge of the company you work for?', 'What music do you put on when you want to get pumped?', 'What songs would be played on a loop in hell?', 'What’s the most unique shop or restaurant you’ve been in?', 'What is the biggest mistake you’ve made at work?', 'What do you think the ideal age to be is?', 'What catchy jingle or bit of advertising has stuck with you all these years?', 'What’s your best “my coworkers are crazy” story?', 'Where’s your favorite place to nap?', 'If you were featured on the local news, what would you most likely be on there for?', 'Has there ever been a time when something so amazing or unexpected happened that it literally left you speechless for a time?', 'What’s your favorite type of day? (weather, temp, etc.)', 'What recent trend are you totally on board with?', 'What’s the silliest thing you are pretty good at?', 'What is your favorite genre of movie? Why?', 'If you had to lose one of your senses, which would you choose to lose?', 'What was your funniest or worst experience with a dentist?', 'Where’s the most surreal area you been to?', 'What’s the best concert you’ve been to and why was it so good?', 'How into self-improvement are you?', 'What is the weirdest food combination you’ve made and tried?', 'Who is the most interesting stranger you’ve met?', 'Do you think you rely too heavily on your phone? Why or why not?', 'How handy are you when it comes to fixing things?', 'What was something courageous you’ve (in person) seen someone do?', 'What are you best at fixing?', 'What’s the best cake you’ve ever eaten?', 'What sport do you wish you knew more about?', 'What kind of people do you most enjoy hanging out with?', 'What’s the noblest endeavor a person can dedicate their life to?', 'Are you a cat or dog person or neither? Why?', 'What luxury is totally worth the price?', 'What could movie theaters do to improve the\xa0experience of going there?', 'What was something you thought would be easy until you tried it?', 'What motivates you?', 'What’s the scariest horror movie or horror book monster?', 'What workers have the worst jobs?', 'How do you think you will be/act when you are old?', 'What do you want to do when you retire?', 'What book had the most significant impact on you?', 'If you were so wealthy you didn’t need to work, what would you do with your time?', 'Do you prefer pens or pencils? Why?', 'What incredibly common thing have you never done?', 'What does your perfect burger or sandwich have in it?', 'What apps do you use most?', 'What’s the longest trip you’ve been on?', 'What big problem do you think technology will solve next?', 'What’s the most creative thing you’ve done?', 'What pets did you have growing up?', 'What smell do you hate that doesn’t seem to bother other people?', 'What takes a lot of time but is totally worth it?', 'What was your best vacation?', 'What makes you feel old when you think about it?', 'When someone finds out what you do, or where you are from, what question do they always ask you?', 'What’s the most delightful hotel or house you’ve stayed in on vacation?', 'What are some films that would make it on to your top 50 list of movies?', 'What do you wish was illegal?', 'If someone came up to you and said “Hey, do that thing you do!”, what thing would pop into your head first?', 'Who is the most interesting person you’ve met and talked with?', 'What was the last thing you were really excited about?', 'What has really taken a toll on you?', 'Would you rather watch a movie on your TV at home or on the big screen in the theater, and why?', 'How good are you at drawing?', 'What’s the most annoying machine you must deal with regularly?', 'What’s your favorite thing about the area/city/state you live in?', 'What was your worst haircut experience?', 'What food do you love that a lot of people might find a little odd?', 'What are some of your favorite holiday traditions that you did while growing up?', 'How often do you dance?', 'What do you usually do on your commute to work?', 'How into tech are you? Why?', 'If you left your current life behind and ran away to follow your dreams, what would you be doing?', 'What company or brand did you love until they betrayed your trust?', 'If the universe is just a simulation, what update or patch does it need?', 'What do you wish your phone could do?', 'What slang are you really happy went out of fashion?', 'What works of art have really made an impression on you?', 'What is the most tedious and/or the most exciting sport to watch?', 'What is the last goal you achieved?', 'What’s the weirdest food you’ve eaten?', 'What kind of art do you appreciate the most?', 'What are two of your favorite snacks?', 'Who is the most intelligent or creative person you know?', 'What public spaces do you feel most comfortable in? (Library, bar, park, mall, stadium, etc.)', 'Would you rather spend time with other people or at home alone?', 'Do you think you have a pretty good work-life balance? Why or why not?', 'What’s your idea of a great party?', 'What’s the biggest adventure you’ve been on?', 'Where have you traveled to?', 'Who has been your most interesting/confusing/annoying neighbor?', 'What food is underrated or under appreciated?', 'What’s your drink of choice? (Either alcoholic or non.)', 'What subjects should be taught in school but aren’t?', 'What’s the best thing you’ve got going on in your life at the moment?', 'What are some of your favorite games to play?', 'What’s the best day you’ve had recently?', 'What’s the best sports game you’ve been to?', 'How do you feel about clowns?', 'What’s the strangest name someone you have met had?', 'What’s your favorite month?', 'What useless facts do you know?', 'What weird thing do you have nostalgia for?', 'What is the most amazing fact you know?', 'Besides insects and spiders, what animals annoy you the most?']

    let currentCard = cardArray[0]
    
    return (

        <View style={styles.item3}>
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
        <Text style={styles.modalText}>{cardArray[currentCardIndex]} </Text>
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
		<Text style={{fontSize:20, color:"#fff", textAlign: "center"}}>Icebreakers</Text>
        </Pressable>
		</View>
    )
}
const styles = StyleSheet.create({ 
    item3: {
		backgroundColor:"green",
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