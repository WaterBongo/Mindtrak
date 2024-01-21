import React, { useCallback } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import * as FileSystem from 'expo-file-system';
import {ScrollView, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

const PickFileButton = () => {
    const handlePress = useCallback(async () => {
      const { cancelled, uri } = await FileSystem.getPickerAsync();
      if (!cancelled) {
        console.log('File selected:', uri);
      }
    }, []);
  
    return (
      <View>
        <Button title="Pick a file" onPress={handlePress} />
      </View>
    );
  };

export default function Home() {
  // Return the View
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  } else {
  

  return (
    <ScrollView style={styles.container}>
      {/* Horizontal box with image and text */}
      <Text style={[styles.helloText, { fontFamily: 'Poppins_500Medium' }]}>Heart Rate vs. Stress Levels</Text>
        <Image 
          source={require('./assets/hrchart.png')} // Replace with your image path
          style={styles.boxImage}
        />
      <Text style={[styles.moodText, { fontFamily: 'Poppins_500Medium' }]}>Heart rate levels are measured by the resting bpm and stress levels are determined by a combination of the AI processed recommendations from the journals along with daily mood logs.</Text>
      {/* <PickFileButton /> */}
      <Text style={[styles.helloText, { fontFamily: 'Poppins_500Medium' }]}>                     Sleep</Text>
        <Image 
          source={require('./assets/sleephr.png')} // Replace with your image path
          style={styles.boxImage}
        />
      <Text style={[styles.moodText, { fontFamily: 'Poppins_500Medium' }]}>Your sleep hours are imported by historical Apple Health data. We also have support for syncing your current sleep data to allow for seamless logging.</Text>
    </ScrollView>
    
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingLeft: 20,
    fontFamily: "Poppins_500Medium",
  },
  helloText: {
    fontSize: 28,
    fontFamily: 'Poppins_500Medium',
    display: 'flex',
    justifyContent: 'center',
  },
  
  moodText: {
    paddingTop: 5,
    paddingBottom: 7,
    paddingLeft: 5,
    fontSize: 18,
    paddingRight: 10,
  },
  recommendationsText: {
    paddingTop: 40,
    fontSize: 20,
  },
  horizontalBox: {
    flexDirection: 'row', // Align children in a row
    alignItems: 'center', // Center items vertically in the container
    backgroundColor: '#9AC3C9', // Background color of the box
    padding: 10, // Padding inside the box
    marginTop: 20,
    width: 330,
    height: 80,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
     // Margin top for spacing from the above element
  },
  boxImage: {
    width: 380, // Width of the image
    height: 285, // Height of the image
    marginRight: 0, // Margin right for spacing between image and text
  },
  boxText: {
    fontSize: 30,
    fontFamily: 'Poppins_500Medium',
    // Add any other styling for the text here
  },
  recText: {
    fontSize: 17,

    // Add any other styling for the text here
  },
  titleText: {
    fontSize: 10,
    paddingTop: 50,
    marginHorizontal: -140,
    // Add any other styling for the text here
  },
  RecommendationBox: {
    flexDirection: 'row', // Align children in a row
    alignItems: 'center', // Center items vertically in the container
    backgroundColor: '#9AC3C9', // Background color of the box
    padding: 10, // Padding inside the box
    marginTop: 20,
    width: 330,
    height: 100,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
     // Margin top for spacing from the above element
  },
});