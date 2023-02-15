import React, { Component } from 'react';  
import { Alert, Button, StyleSheet, View } from 'react-native';  
  
export default class HowTo extends Component {  
    onPressButton() {  
        Alert.alert('How to Play',
        '1. Use solo as a journaling/writing prompt or for reflection. 2. Use 1 on 1 to create emotional intimacy and learn more about each other. 3. In groups ask questions from the fun decks. 4. Make your own rules!')  
    }  
  
    render() {  
        return (  
            <View style={styles.container}>  
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="How to Play"  
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
        margin: 5,
        borderRadius: 20,
        
    },  
})  

