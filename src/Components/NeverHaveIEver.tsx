import React, { useState } from 'react';  
import { StyleSheet, View, Text, Alert, Modal, Pressable } from 'react-native';

export default function NeverHaveIEver() {
    const [modalVisible, setModalVisible] = useState(false);
    const [favoriteCard, setFavoriteCard] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);


    let cardArray = 
    ['Never have I ever\xa0gone skydiving.', 'Never have I ever\xa0flirted with a waiter or bartender.', 'Never have I ever\xa0lied about my age.', 'Never have I ever\xa0been a best man.', 'Never have I ever\xa0used a gas station bathroom.', 'Never have I ever\xa0been on a blind date.', 'Never have I ever\xa0shared a news story without reading past the headline.', 'Never have I ever\xa0been a maid of honor.', 'Never have I ever\xa0went more than a day without brushing my teeth.', 'Never have I ever\xa0convinced a partner to dump a friend.', 'Never have I ever\xa0gone surfing.', 'Never have I ever\xa0had a lucid dream.', 'Never have I ever\xa0been to a strip club.', "Never have I ever\xa0broken someone else's heart.", 'Never have I ever\xa0been blackout drunk.', 'Never have I ever\xa0done a "drive-by" of an ex or crush\'s house.', 'Never have I ever\xa0been to an NHL game.', 'Never have I ever\xa0danced in the rain.', 'Never have I ever\xa0auditioned for a reality show.', 'Never have I ever\xa0cursed in front of an in-law.', 'Never have I ever\xa0gotten into a fender bender.', 'Never have I ever\xa0traveled to a foreign country.', 'Never have I ever\xa0cried at a party.', 'Never have I ever\xa0gotten gum in my hair.', 'Never have I ever\xa0been nude in public.', 'Never have I ever\xa0donated an organ.', 'Never have I ever\xa0lost my voice.', 'Never have I ever\xa0had chicken pox.', 'Never have I ever\xa0danced on a table.', 'Never have I ever\xa0cut my own hair.', 'Never have I ever\xa0drank an entire bottle of wine.', 'Never have I ever\xa0gone vegan.', 'Never have I ever\xa0peed in a pool.', 'Never have I ever cheated on a partner.', 'Never have I ever\xa0been hospitalized for something other than giving birth or being born.', 'Never have I ever\xa0cried or flirted my way out of a ticket.', 'Never have I ever\xa0dated or hooked up with someone 5 years younger.', 'Never have I ever\xa0campaigned for a political candidate.', 'Never have I ever\xa0set something on fire while cooking.', 'Never have I ever\xa0adjusted myself in public.', "Never have I ever\xa0hooked up with a sibling's friend.", 'Never have I ever faked sick from work.', 'Never have I ever\xa0Googled someone before a date.', 'Never have I ever\xa0dressed in drag.', 'Never have I ever\xa0been to a pro wrestling match.', '\xa0Never have I ever\xa0cursed in front a of a child.', 'Never have I ever\xa0lied on social media.', 'Never have I ever\xa0worn a wig or extensions.', 'Never have I ever\xa0gotten seasick.', 'Never have I ever smoked weed.', 'Never have I ever\xa0trolled a stranger online.', 'Never have I ever\xa0had a black eye.', 'Never have I ever\xa0lied to my kids.', 'Never have I ever\xa0sexted an ex.', 'Never have I ever\xa0gotten in a physical fight.', 'Never have I ever\xa0been arrested.', 'Never have I ever\xa0gone snowboarding.', 'Never have I ever\xa0run a marathon.', 'Never have I ever\xa0went more than three days without showering.', 'Never have I ever\xa0fallen in love at first sight.', 'Never have I ever\xa0parked in a handicap spot.', 'Never have I ever\xa0tried bodybuilding.', 'Never have I ever\xa0marched in a protest.', 'Never have I ever\xa0been on a cruise.', 'Never have I ever\xa0kissed a stranger.', 'Never have I ever\xa0cried at work.', "Never have I ever\xa0been someone else's alibi.", "Never have I ever\xa0read a partner's emails.", 'Never have I ever\xa0met a celebrity.', 'Never have I ever\xa0learned a foreign language.', 'Never have I ever\xa0dated a musician.', 'Never have I ever\xa0beaten a video game.', 'Never have I ever\xa0been in a talent show.', "Never have I ever\xa0eaten someone else's lunch from the office fridge.", 'Never have I ever\xa0played a musical instrument.', 'Never have I ever\xa0fought with a partner in public.', 'Never have I ever\xa0waited tables.', 'Never have I ever\xa0sent a stranger a drink.', 'Never have I ever\xa0been cheated on.', 'Never have I ever\xa0been camping.', "Never have I ever\xa0spread a rumor I knew wasn't true.", 'Never have I ever\xa0had a road rage incident.', 'Never have I ever\xa0been on TV.', "Never have I ever\xa0hooked up with an ex's friend.", 'Never have I ever\xa0eaten an entire pack of Oreos in one sitting.', 'Never have I ever\xa0had a paranormal experience.', "Never have I ever\xa0thought a friend's baby was ugly.", 'Never have I ever\xa0lied to my best friend.', 'Never have I ever\xa0been backstage at a concert.', 'Never have I ever\xa0had braces.', '\xa0Never have I ever\xa0tried hard drugs.', 'Never have I ever\xa0second-guessed a relationship.', 'Never have I ever\xa0spent an entire day watching reality TV.', 'Never have I ever\xa0been to an NFL game.', 'Never have I ever\xa0laughed at a funeral.', 'Never have I ever\xa0heckled a live performance.', 'Never have I ever\xa0played strip poker.', '\xa0Never have I ever\xa0blabbed something I swore to secrecy.', 'Never have I ever\xa0fired a gun.', 'Never have I ever\xa0had a surprise party thrown for me.', 'Never have I ever\xa0flirted with a married person.', 'Never have I ever\xa0lied to a law enforcement officer.', 'Never have I ever\xa0had surgery.', 'Never have I ever\xa0changed a tire.', 'Never have I ever\xa0been awake for 24 straight hours or more.', 'Never have I ever\xa0been in a police car.', 'Never have I ever\xa0gotten busy in a public place.', 'Never have I ever\xa0gone bungee jumping.', 'Never have I ever\xa0shoplifted.', "Never have I ever\xa0been someone's one phone call from jail.", 'Never have I ever\xa0sent a sext to the wrong person.', 'Never have I ever\xa0called the cops on someone else.', 'Never have I ever\xa0returned something after I wore it.', 'Never have I ever\xa0cursed at an in-law.', 'Never have I ever\xa0seen someone die.', 'Never have I ever\xa0gotten or given a hickey.', 'Never have I ever\xa0had a one-night stand.', 'Never have I ever\xa0slept in my car.', 'Never have I ever\xa0stolen something from my workplace.', "Never have I ever\xa0snooped through a friend's room, cabinets or property.", 'Never have I ever\xa0purposely given someone bad advice.', 'Never have I ever\xa0texted or taken a call at the movies.', 'Never have I ever\xa0been to an MLB\xa0 game.', 'Never have I ever\xa0dated or hooked up with someone 10 years older.', 'Never have I ever\xa0called a partner the wrong name.', 'Never have I ever\xa0convinced a friend to dump a partner.', 'Never have I ever\xa0had food poisoning.', 'Never have I ever\xa0crashed a party or wedding.', 'Never have I ever\xa0fallen in love.', 'Never have I ever\xa0visited a nude beach.', 'Never have I ever\xa0been scuba diving.', "Never have I ever\xa0slid into an ex's DMs.", 'Never have I ever\xa0lied about my income.', 'Never have I ever\xa0gotten a bedroom-related injury.', 'Never have I ever\xa0danced on a pole.', 'Never have I ever\xa0accidentally said "I love you" to someone.', 'Never have I ever\xa0performed onstage.', 'Never have I ever\xa0given a eulogy.', 'Never have I ever\xa0left a mean YouTube comment.', 'Never have I ever\xa0snitched on someone else at work.', "Never have I ever\xa0read someone else's mail.", 'Never have I ever\xa0blamed someone else for my mistake at work.', 'Never have I ever\xa0tried a fad diet.', 'Never have I ever\xa0had a blistering sunburn.', 'Never have I ever\xa0overdrafted my bank account.', 'Never have I ever\xa0lost more than $50 gambling.', 'Never have I ever\xa0fallen asleep at work.', "Never have I ever\xa0ruined someone else's vacation.", 'Never have I ever\xa0picked up a hitchhiker.', 'Never have I ever\xa0lurked my ex on social media.', 'Never have I ever\xa0used a fake ID.', 'Never have I ever\xa0left a negative Yelp review.', 'Never have I ever\xa0ridden a horse.', 'Never have I ever\xa0lied to my parents.', 'Never have I ever\xa0ghosted someone.', 'Never have I ever\xa0lied on a dating profile.', 'Never have I ever\xa0started a hashtag.', 'Never have I ever\xa0gone commando.', 'Never have I ever\xa0broken a bone.', "Never have I ever\xa0been the subject of a rumor that wasn't true.", 'Never have I ever\xa0driven a stick shift.', "Never have I ever\xa0hooked up with a friend's sibling.", 'Never have I ever\xa0cheated on a test.', 'Never have I ever\xa0been ghosted.', 'Never have I ever\xa0had a cavity.', "Never have I ever\xa0lurked my partner's ex on social media.", "Never have I ever\xa0wished I didn't have kids.", 'Never have I ever\xa0peed my pants as an adult.', 'Never have I ever stage dived.', 'Never have I ever\xa0blamed a fart on a pet.', 'Never have I ever\xa0set a friend up on a date.', 'Never have I ever\xa0sent nudes.', 'Never have I ever\xa0lied about my relationship status.', 'Never have I ever\xa0given someone a fake phone number.', 'Never have I ever\xa0had frostbite.', 'Never have I ever\xa0drunk-dialed my ex.', 'Never have I ever\xa0eaten food that broke the five-second rule.', 'Never have I ever\xa0won more than $50 gambling.', 'Never have I ever\xa0seen something creepy while using public transportation.', 'Never have I ever\xa0eaten an entire pizza alone.', 'Never have I ever\xa0had a broken heart.', 'Never have I ever\xa0witnessed a crime.', 'Never have I ever\xa0donated blood.', 'Never have I ever\xa0gone skiing.', 'Never have I ever\xa0gone skinny dipping.', 'Never have I ever\xa0fallen asleep in public.', 'Never have I ever\xa0hit a parked car.', 'Never have I ever\xa0thought a cartoon character was hot.', 'Never have I ever\xa0cut in line on purpose.', 'Never have I ever\xa0dropped a baby.', 'Never have I ever\xa0gone more than 20 mph over the speed limit.', 'Never have I ever\xa0held a grudge longer than a year.', "Never have I ever\xa0taken credit for someone else's work.", 'Never have I ever\xa0hitchhiked.', 'Never have I ever\xa0been dumpster diving.', "Never have I ever\xa0worked with someone I couldn't stand.", 'Never have I ever\xa0snuck into a movie.', 'Never have I ever\xa0run a red light.', 'Never have I ever\xa0paid for adult content.', 'Never have I ever\xa0tipped less than 10 percent.', 'Never have I ever\xa0tried CrossFit.', 'Never have I ever\xa0re-gifted something.', 'Never have I ever\xa0received nudes.', 'Never have I ever\xa0dropped acid.', 'Never have I ever\xa0spent a night in jail.', 'Never have I ever\xa0lied on my resume.', 'Never have I ever\xa0filmed an intimate moment.', 'Never have I ever\xa0cried in public.', 'Never have I ever\xa0worn white to a wedding.', 'Never have I ever\xa0been to an NBA or WNBA game.', 'Never have I ever\xa0worked retail.', 'Never have I ever\xa0gotten sick on a date.', 'Never have I ever\xa0had a friend with benefits.', 'Never have I ever\xa0eaten a ghost pepper.', 'Never have I ever\xa0lost my shoes during a night out.', 'Never have I ever\xa0been in a helicopter.', 'Never have I ever\xa0prank-called someone.', 'Never have I ever\xa0had surgery.', 'Never have I ever\xa0gotten stitches.', 'Never have I ever\xa0dined and ditched.', 'Never have I ever\xa0thrown up in public.', 'Never have I ever\xa0joined the mile-high club.', 'Never have I ever\xa0fainted.', 'Never have I ever\xa0tried to make an ex jealous.', 'Never have I ever\xa0hooked up with someone of the same sex or gender.', 'Never have I ever\xa0sneezed on a stranger.', 'Never have I ever\xa0thrown someone else a surprise party.', 'Never have I ever\xa0watched a NASCAR race.', "Never have I ever\xa0read a partner's text messages.", "Never have I ever\xa0slid into a stranger's DMs.", 'Never have I ever\xa0chipped a tooth.', 'Never have I ever\xa0accepted a drink from a stranger.', 'Never have I ever\xa0sang in public.', 'Never have I ever\xa0hopped a turnstile.', 'Never have I ever\xa0run for my life.', 'Never have I ever\xa0been fired from a job.', 'Never have I ever\xa0walked in on my parents.', 'Never have I ever\xa0lied about who I voted for.', 'Never have I ever\xa0clogged a toilet.', 'Never have I ever\xa0gone to work hungover.', 'Never have I ever\xa0gone streaking.', 'Never have I ever\xa0tipped more than 50 percent.', "Never have I ever\xa0hooked up with a friend's ex.", 'Never have I ever\xa0lied during this game!', 'Never have I ever\xa0mooned someone.', 'Never have I ever\xa0had a wardrobe malfunction.', 'Never have I ever\xa0gotten busy in a car.', 'Never have I ever\xa0flashed someone.', 'Never have I ever\xa0wished I had kids.', 'Never have I ever\xa0tried moonshine.']

    let currentCard = cardArray[0]

    return (

    <View style={styles.item6}>
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
    <Text style={{fontSize:20, color:"#fff", textAlign: "center"}}>Never have I ever</Text>
    </Pressable>
    </View>
    );
    }


const styles = StyleSheet.create({ 
    item6: {
        backgroundColor:"blue",
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