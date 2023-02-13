import { StyleSheet, View , Image, ViewPagerAndroidBase} from 'react-native';

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
        margin: 'auto',
        padding: 100,
        // alignSelf: 'center',
        width: 400, 
        height: 400,
    }

});