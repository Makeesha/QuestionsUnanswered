import React, { Component } from 'react';  
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';  
  
export default class About extends Component {  
    onPressButton() {  
        Alert.alert(
            'About',
            'Staying curious is how we deepen connections and bonds with each other. My goal with creating this app is that you learn more about yourself, the people around you, and no question goes unanswered.',
            [
           
            {text: 'OK', onPress: () => console.log('OK Pressed')},
            ], 
            { cancelable: false }
            ) 
    }  
  
    render() {  
        return (  
            <View style={styles.container}>  
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="About"  
                    />  
                </View>  
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
    },  
    buttonContainer: {  
        margin: 15 ,
        borderRadius: 20,
        
    },  

})  

