import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

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
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
      });
      if (!fontsLoaded) {
        return <Text>Loading...</Text>
      } else {
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
                        placeholder="Input 1"
                        value={input1}
                        onChangeText={setInput1}
                        style={styles.input1}
                    />
                    <TextInput
                        placeholder="Input 2"
                        value={input2}
                        onChangeText={setInput2}
                        style={styles.input2}
                    />
                    <TextInput
                        placeholder="Input 3"
                        value={input3}
                        onChangeText={setInput3}
                        style={styles.input3}
                    />
                    <Button title="Submit" onPress={handleSubmit} />
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    addText: {
        position: 'absolute',
        top: 40,
        left: 20,
        fontSize: 28,
        fontFamily: 'Poppins_500Medium',
    },
    titleText: {
        paddingBottom: 40,
        top: 0, 
        paddingTop: 0,
        fontSize: 18,
        fontFamily: 'Poppins_500Medium',
    },
    journalstartText: {
        paddingTop: 10,
        fontSize: 20,
        color: '#04406C',
        fontFamily: 'Poppins_500Medium',
    },
    greenText: {
        fontSize: 15,
        color: '#365757',
        fontFamily: 'Poppins_500Medium',
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
        borderColor: 'black',
        fontSize: 20,
        color: 'black',
        fontFamily: 'Poppins_500Medium',
        
    },
    input2: {
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        borderColor: 'black',
        fontSize: 15,
        color: 'black',
        fontFamily: 'Poppins_500Medium',
        
    },
    input3: {
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        borderColor: 'black',
        color: 'black',
        fontFamily: 'Poppins_500Medium',
        
    },
    recommendationBox: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#9AC3C9',
    },
    boxImage: {
        width: 50, // Width of the image
        height: 50, // Height of the image

      },
});