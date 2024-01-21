import { Poppins_500Medium } from '@expo-google-fonts/poppins';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Survey() {
    const [modalVisible, setModalVisible] = useState(false);
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [recommendations, setRecommendations] = useState([]);

    const handleSubmit = () => {
        setRecommendations([...recommendations, { input1, input2, input3 }]);
        setInput1('');
        setInput2('');
        setInput3('');
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            {/* Text above the plus icon */}
            <Text style={styles.addText}>Journal</Text>

            {/* Button to open the form */}
            <Image 
          source={require('./assets/book.webp')} // Replace with your image path
          style={styles.boxImage}
            />
            <Text style={styles.journalstartText}>Start Journaling</Text>
            <Text style={styles.greenText}>Start creating by pressing</Text>
            <Text style={styles.greenText}>the plus button!</Text>

            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                <Ionicons name="add-circle-outline" size={64} />
            </TouchableOpacity>
            <Text style={styles.titleText}>Journals:</Text>
            {/* Modal for the input form */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalView}>
                    <TextInput
                        placeholder="Date"
                        value={input1}
                        onChangeText={setInput1}
                        style={styles.input1}
                    />
                    <TextInput
                        placeholder="Title"
                        value={input2}
                        onChangeText={setInput2}
                        style={styles.input2}
                    />
                    <TextInput
                        placeholder="Start writing..."
                        value={input3}
                        onChangeText={setInput3}
                        style={styles.input3}
                    />
                    <Button title="Submit" onPress={handleSubmit} style={styles.done}/>
                </View>
            </Modal>

            {/* Displaying recommendations */}
            {recommendations.map((item, index) => (
                <View key={index} style={styles.recommendationBox}>
                    <Text>{item.input1}</Text>
                    <Text>{item.input2}</Text>
                    <Text>{item.input3}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },

    done: {
        paddingTop: 10,
        fontSize: 20,
        color: '#9AC3C9',
    },

    addText: {
        position: 'absolute',
        top: 40,
        left: 20,
        fontSize: 28,
    },
    titleText: {
        paddingBottom: 40,
        top: 0, 
        paddingTop: 0,
        fontSize: 18,
    },
    journalstartText: {
        paddingTop: 10,
        fontSize: 20,
        color: '#04406C',
    },
    greenText: {
        fontSize: 15,
        color: '#365757',
    },
    addButton: {
        marginBottom: 100, // Adjust as needed
    },
    modalView: {
        marginTop: 50,
        marginHorizontal: 20,
        backgroundColor: '#F2F2F2',
        padding: 35,
        alignItems: 'center',
        elevation: 5,
        borderColor: '#9AC3C9',
        borderWidth: 2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    input1: {
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        borderColor: '#F2F2F2',
        fontSize: 20,
        color: '#04406C',

    },
    input2: {
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        borderColor: '#F2F2F2',
        fontSize: 15,
        color: '#365757',
        
    },
    input3: {
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        borderColor: '#F2F2F2',
        
    },
    recommendationBox: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#9AC3C9',
        color: '#04406C',
        tintColor: '#9AC3C9',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    boxImage: {
        width: 50, // Width of the image
        height: 50, // Height of the image

      },
});