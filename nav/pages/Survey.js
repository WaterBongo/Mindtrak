import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, StyleSheet, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Survey() {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [surveyDone, setSurveyDone] = useState(false);

    // Sample questions - replace with your actual questions
    const questions = [
        { question: "Question 1", options: ["Option 1", "Option 2", "Option 3"] },
        { question: "Question 2", options: ["Option 1", "Option 2", "Option 3"] },
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
                        <Ionicons name="arrow-back-circle" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNextQuestion}>
                        <Ionicons name="arrow-forward-circle" size={30} />
                    </TouchableOpacity>
                </View>
                {currentQuestionIndex === questions.length - 1 && (
                    <Button title="Submit" onPress={handleNextQuestion} />
                )}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => !surveyDone && setModalVisible(true)}>
                <Text style={styles.startSurveyText}>Start Survey</Text>
            </TouchableOpacity>
            {surveyDone && <Text>You can only do a survey once a day.</Text>}

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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    startSurveyText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        marginRight: 10,
    },
    selectedCircle: {
        backgroundColor: 'blue', // Change this color as needed
    },
    optionText: {
        fontSize: 16,
    },
    modalView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContent: {
        height: '75%',
        backgroundColor: 'white',
        padding: 20,
    },
    questionText: {
        fontSize: 18,
        marginBottom: 20,
    },
    optionText: {
        fontSize: 16,
        marginBottom: 10,
    },
    navigationButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
});