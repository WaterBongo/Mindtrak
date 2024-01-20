import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Home() {
  // Return the View
  return (
    <View style={styles.container}>
      <Text style={styles.helloText}>Hello!</Text>

      {/* Horizontal box with image and text */}
      <View style={styles.horizontalBox}>
        <Image 
          source={require('./assets/happy.webp')} // Replace with your image path
          style={styles.boxImage}
        />
        <Text style={styles.boxText}>Your text here</Text>
      </View>
      {/* Other components can go here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingLeft: 20,
  },
  helloText: {
    fontSize: 20,
  },
  horizontalBox: {
    flexDirection: 'row', // Align children in a row
    alignItems: 'center', // Center items vertically in the container
    backgroundColor: '#e0e0e0', // Background color of the box
    padding: 10, // Padding inside the box
    marginTop: 30,
    width: 300,
     // Margin top for spacing from the above element
  },
  boxImage: {
    width: 50, // Width of the image
    height: 50, // Height of the image
    marginRight: 10, // Margin right for spacing between image and text
  },
  boxText: {
    fontSize: 16,
    // Add any other styling for the text here
  },
});