import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';

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
        <View style={styles.container} multiline = {true}>
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
                <TouchableOpacity style={styles.backbutton} onPress={() => setModalVisible(false)}>
                <Ionicons name="close-outline" size={64} />
                </TouchableOpacity>
                    <TextInput
                        placeholder="Enter Date"
                        placeholderTextColor="#8C8C8C"
                        value={input1}
                        onChangeText={setInput1}
                        style={styles.input1}
                    />
                    <TextInput
                        placeholder="Enter Title"
                        placeholderTextColor="#8C8C8C"
                        value={input2}
                        onChangeText={setInput2}
                        style={styles.input2}
                    />
                    <TextInput
                        placeholder="write something..."
                        placeholderTextColor="#8C8C8C"
                        value={input3}
                        onChangeText={setInput3}
                        style={styles.input3}
                        numberOfLines = {20}
                        multiline = {true}
                    />
                    <Button title="Submit" onPress={handleSubmit} style={style.submit}/>
                        {/* <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
                            <Ionicons name="checkmark-circle-outline" size={24} color="black" />
                        </TouchableOpacity> */}
                
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
    submit: {
        marginBottom: 15, // Adjust as needed
        marginTop: -5,
        marginLeft: 245,
        zIndex: -200,
        right: -25,
        position: 'absolute',
        padding: 10,
        width: 100,
        height: 100,
        transform: [{ scale: 1.6}],
    },
    backbutton: {
        marginBottom: 15, // Adjust as needed
        marginTop: -5,
        marginLeft: 245,
        zIndex: -200,
        right: -25,
        position: 'absolute',
        padding: 10,
        width: 100,
        height: 100,
        transform: [{ scale: 0.6}],
    },
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
        marginTop: 100,
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
        placeholderTextColor: '#fff',
    },
    input1: {
        height: 40,
        bottom: 20,
        marginBottom: -37,
        marginRight: 63,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        borderColor: '#F2F2F2',
        borderBottomColor: 'transparent',
        fontSize: 18,
        color: 'black',
        fontFamily: 'Poppins_500Medium',
    },
    input2: {
        height: 40,
        marginTop: 3,
        marginRight: 63,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        borderColor: '#F2F2F2',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        fontSize: 15,
        color: 'black',
        fontFamily: 'Poppins_500Medium',
        
    },
    input3: {
        height: 320,
        marginBottom: 100,
        marginRight: 5,
        borderWidth: 1,
        // center the text to the box

        textAlignVertical: 'top',
        padding: 10,
        paddingRight: 10,
        fontSize: 13,
        width: 330,
        borderColor: '#F2F2F2',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        color: 'black',
        fontFamily: 'Poppins_500Medium',
        textAlignVertical: 'top',
        
    },
    recommendationBox: {
        width: 338,
        height: 127,
        borderRadius: 25,
        margin: 10,
        padding: 10,
        borderWidth: 1,
        backgroundColor: '#F2F2F2',
        borderColor: '#9AC3C9',
    },
    boxImage: {
        width: 50, // Width of the image
        height: 50, // Height of the image

      },
});