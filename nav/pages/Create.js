import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Button, StyleSheet, Modal } from 'react-native';
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
            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                <Ionicons name="add-circle-outline" size={64} />
            </TouchableOpacity>
            <Text>Journals</Text>
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
                        placeholder="Input 1"
                        value={input1}
                        onChangeText={setInput1}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Input 2"
                        value={input2}
                        onChangeText={setInput2}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Input 3"
                        value={input3}
                        onChangeText={setInput3}
                        style={styles.input}
                    />
                    <Button title="Submit" onPress={handleSubmit} />
                </View>
            </Modal>

            {/* Displaying recommendations */}
            {recommendations.map((item, index) => (
                <View key={index} style={styles.recommendationBox}>
                    <Text>Input 1: {item.input1}</Text>
                    <Text>Input 2: {item.input2}</Text>
                    <Text>Input 3: {item.input3}</Text>
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
    },
    addText: {
        position: 'absolute',
        top: 40,
        left: 20,
        fontSize: 18,
    },
    addButton: {
        marginBottom: 100, // Adjust as needed
    },
    modalView: {
        marginTop: 50,
        marginHorizontal: 20,
        backgroundColor: 'white',
        padding: 35,
        alignItems: 'center',
        elevation: 5,
    },
    input: {
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        width: '100%',
    },
    recommendationBox: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
});