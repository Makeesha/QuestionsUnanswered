import { StyleSheet, View , Image } from 'react-native';

export default function Logo() {

    return (
        <View>
        <Image 
			source = {require('/Users/makeeshapruitt/Developer/capstone/QuestionsUnanswered/assets/logo2.png')}/>
        </View>
    )
}
const styles = StyleSheet.create({ 
    container:	{
        width: 400, 
        height: 400,
        
    }

});