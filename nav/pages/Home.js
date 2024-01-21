import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Home() {
  // Return the View
  return (
    <View style={styles.container}>
      <Text style={styles.helloText}>Hello!</Text>
      <Text style={styles.moodText}>Your average mood is...</Text>

      {/* Horizontal box with image and text */}
      <View style={styles.horizontalBox}>
        <Image 
          source={require('./assets/happy.webp')} // Replace with your image path
          style={styles.boxImage}
        />
        <Text style={styles.boxText}>   Happy!</Text>
      </View>
      <Text style={styles.recommendationsText}>Recommendations</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingLeft: 20,
  },
  helloText: {
    fontSize: 30,
  },
  moodText: {
    paddingTop: 10,
    fontSize: 20,
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
    width: 50, // Width of the image
    height: 50, // Height of the image
    marginRight: 10, // Margin right for spacing between image and text
  },
  boxText: {
    fontSize: 30,
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