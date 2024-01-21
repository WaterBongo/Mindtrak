import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, StyleSheet, Button, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'react-native-svg';
export default function Survey() {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [surveyDone, setSurveyDone] = useState(false);

    // Sample questions - replace with your actual questions
    const questions = [
        { question: "How would you describe your overall energy level right now?", options: ["Very low", "Low", "Moderate","High","Very high"] },
        { question: "What best describes your current emotional state?", options: ["Happy", "Sad", "Stressed", "Excited", "Calm"] },
        { question: "On a scale of 1 to 10, how satisfied are you with your current situation?", options: ["Extremely dissatisfied", "2-4. Dissatisfied", "Neutral","6-8. Satisfied","9-10. Extremely satisfied"] },
        { question: "How would you rate your level of motivation right now?", options: ["Very low", "Low", "Moderate"," High","Very high"] },
        { question: "Which of the following words best describes your mood?", options: ["Relaxed", "Anxious", "Content"," Irritable","Energetic"] },

        // Add more questions as needed
    ];

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Submit the survey
            setSurveyDone(true);
            setModalVisible(false);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const SurveyModalContent = () => {
        const [selectedOptions, setSelectedOptions] = useState({});
    
        const selectOption = (questionIndex, optionIndex) => {
            setSelectedOptions({
                ...selectedOptions,
                [questionIndex]: optionIndex,
            });
        };
    
        const isOptionSelected = (questionIndex, optionIndex) => {
            return selectedOptions[questionIndex] === optionIndex;
        };
    
        return (
            
            <View style={styles.modalContent}>
                {/* <ImageBackground source={require('./assets/background.png')} style={styles.backgroundImage}> */}
                <Text style={styles.questionText}>{questions[currentQuestionIndex].question}</Text>
                {/* Display options here */}
                {questions[currentQuestionIndex].options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.optionButton}
                        onPress={() => selectOption(currentQuestionIndex, index)}
                    >
                        <View style={[styles.circle, isOptionSelected(currentQuestionIndex, index) && styles.selectedCircle]} />
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
                <View style={styles.navigationButtons}>
                    <TouchableOpacity onPress={handlePreviousQuestion}>
                        <Ionicons name="arrow-back-circle" size={80} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNextQuestion}>
                        <Ionicons name="arrow-forward-circle" size={80} />
                    </TouchableOpacity>
                </View>
                {currentQuestionIndex === questions.length - 1 && (
                    <Button title="Submit" onPress={handleNextQuestion} />
                )}
                {/* </ImageBackground> */}
            </View>
            
        );
    };

    return (
        <View style={styles.container}>
            <Image 
          source={require('./assets/survey.webp')}
          style={styles.boxImage}
          />
            <TouchableOpacity onPress={() => !surveyDone && setModalVisible(true)}>

                <View style={styles.horizontalBox}>
                    <Text style={styles.startSurveyText}>                     Start Survey</Text>
                </View>
                <View style={styles.blackBox}></View>
            </TouchableOpacity>
            {surveyDone && <Text style={styles.bottomText}>You can only do a survey once a day.</Text>}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.modalView}>
                    <SurveyModalContent />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    // backgroundImage: {
    //     flex: 1,
    //     resizeMode: 'cover',
    // },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    startSurveyText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#04406C',
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: - 10,

    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 80,
        borderColor: 'black',
        marginRight: 30,
    },
    selectedCircle: {
        backgroundColor: 'black',
        marginTop: 80, // Change this color as needed
    },
    optionText: {
        fontSize: 16,
        paddingTop: 30,
    },
    bottomText: {
        fontSize: 16,
        paddingTop: 30,
    },
    modalView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContent: {
        height: '100%',
        backgroundColor: 'white',
        padding: 20,
    },
    questionText: {
        fontSize: 25,
        marginTop: 60,
        marginLeft: 20,
    },
    optionText: {
        fontSize: 20,
        marginLeft: 80,
        marginTop: 70,
        borderColor: 'blue',

    },
    navigationButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 100,
    },
    horizontalBox: {
        flexDirection: 'row', // Align children in a row
        alignItems: 'center', // Center items vertically in the container
        backgroundColor: '#D1E6E6', // Background color of the box
        padding: 10, // Padding inside the box
        marginTop: 20,
        width: 330,
        height: 50,
        zIndex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
         // Margin top for spacing from the above element
      },
      blackBox: {
        flexDirection: 'row', // Align children in a row
        alignItems: 'center', // Center items vertically in the container
        backgroundColor: '#273B4A', // Background color of the box
        padding: 10, // Padding inside the box
        marginTop: -44,
        zIndex:0,
        width: 330,
        height: 50,
    
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
         // Margin top for spacing from the above element
      },
      boxImage: {
        width: 100, // Width of the image
        height: 100, // Height of the image// Margin right for spacing between image and text
      },
});