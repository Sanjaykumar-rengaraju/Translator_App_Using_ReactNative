import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert,StyleSheet } from 'react-native';

const DetectLanguage = () => {
    const [text, setText] = useState('');
    const [target, setTarget] = useState('');

    const fetchData = async () => {
        try {
            const response = await fetch('https://translate-plus.p.rapidapi.com/language_detect', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': '3f4add2e16msh2b83f793044be81p1b134ejsnd04a8052f52e',
                    'X-RapidAPI-Host': 'translate-plus.p.rapidapi.com',
                },
                body: JSON.stringify({
                    text: text,
                }),
            });

            const data = await response.json();

            setTarget(data.language_detection.language)

            
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to translate. Please try again.');
        }
    }

    return (
        <View style={styles.container}>
            
            <TextInput
            style={styles.input}
                placeholder='Enter text to translate...'
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={fetchData}
            >
                <Text style={{ color: 'white', textAlign: 'center' }}>Detect</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{target}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        width : '100%',
        height : '100vh',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 2,
        marginBottom: 10,
        paddingLeft: 20,
        width: '100%',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        width: '100%',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    translation: {
        color: "black",
        fontSize: 20,
        marginTop: 20,
        fontWeight:'bold'
    },
    text : {
        fontSize:20,
        fontWeight : 'bold',
        marginTop: 20,
      }
});

export default DetectLanguage;
