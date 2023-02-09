import { StyleSheet, View , Image} from 'react-native';

export default function Logo() {

    return (
        <Image style={styles.logo}
			source = {require('/Users/makeeshapruitt/Developer/capstone/QuestionsUnanswered/assets/logo2.png')}/>
    )
}
const styles = StyleSheet.create({ 
    logo:	{
        // display: 'flex',
        // flexDirection: 'column',
        justifyContent:"center",
        alignItems: "center",
        width: 175, 
        height: 175,
    }

});