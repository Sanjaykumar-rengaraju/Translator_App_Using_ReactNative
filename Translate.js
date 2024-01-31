import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const Translate = () => {
    const [text, setText] = useState('');
    const [source, setSource] = useState('');
    const [target, setTarget] = useState('');
    const [translation, setTranslation] = useState('');

    const fetchData = async () => {
        try {
            const response = await fetch('https://translate-plus.p.rapidapi.com/translate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': '3f4add2e16msh2b83f793044be81p1b134ejsnd04a8052f52e',
                    'X-RapidAPI-Host': 'translate-plus.p.rapidapi.com',
                },
                body: JSON.stringify({
                    text: text,
                    source: source,
                    target: target,
                }),
            });

            const data = await response.json();

            setTranslation(data.translations.translation);

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
            <TextInput
                style={styles.input}
                placeholder='Enter source language code...'
                onChangeText={newSource => setSource(newSource)}
                defaultValue={source}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter target language code...'
                onChangeText={newTarget => setTarget(newTarget)}
                defaultValue={target}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={fetchData}
            >
                <Text style={styles.buttonText}>Translate</Text>
            </TouchableOpacity>
            <Text style={styles.translation}>{translation}</Text>
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
});

export default Translate;
