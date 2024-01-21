import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function Home() {
  const [advice, setAdvice] = useState(''); // State variable to store the advice text

  async function get_Reccs() {
    // Default options are marked with *
    const intervalId = setInterval(async () => {
      const response = await fetch("http://100.73.7.50:8080/getadvice/0215-4381-5327-1564", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
      });
      const data = await response.json(); // parses JSON response into native JavaScript objects
      if (data.ready) {
        clearInterval(intervalId);
        const data_Advice = data.advice;
        setAdvice(data_Advice); // Update the state with the advice data
      }
    }, 1000); // Set the interval time in milliseconds
  };

  useEffect(() => {
    get_Reccs(); // Call this function when the component mounts
  }, []); // Empty dependency array means it only runs once after the initial render
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const createBox = (firstxt, secondtxt) => {
    return (
      <View style={styles.customBox}>
        <Text style={styles.customBoxText}>{firstxt}</Text>
        <Text style={styles.customBoxText}>{secondtxt}</Text>
      </View>
    );
  };
get_Reccs()
//create new boxes for all of them TODO
  return (
    <View style={styles.container}>
      <Text style={[styles.helloText, { fontFamily: 'Poppins_500Medium' }]}>Hello!</Text>
      <Text style={[styles.moodText, { fontFamily: 'Poppins_500Medium' }]}>Your average mood is...</Text>

      {/* Horizontal box with image and text */}
      <View style={styles.horizontalBox}>
        <Image 
          source={require('./assets/happy.webp')} // Replace with your image path
          style={styles.boxImage}
        />
        <Text style={styles.boxText}>   Happy!</Text>
      </View>
      <Text style={[styles.recommendationsText, { fontFamily: 'Poppins_500Medium'}]}>Recommendations</Text>
      {createBox("Set Boundaries: Politely but firmly let your friend know that their behavior is not helpful and is causing undue stress. Explain how you and your teammates prefer to work and that constant pressure is counterproductive.\n\nTeam Intervention: If the behavior continues, consider a team discussion. Sometimes peer pressure can be more effective than one-on-one conversations. The team can set expectations for everyone's behavior.\n\nDesignate a Mediator: If direct confrontation is challenging, perhaps a team leader or another neutral party could mediate the situation and relay concerns to the problematic friend.\n\nFocus on Your Work: Concentrate on the tasks at hand and try to block out distractions. Remember that you have control over your own actions and responses, even if you can't control your friend's behavior.\n\nTake Breaks: Make sure to take short breaks to clear your mind, especially when you feel tension rising. A quick walk, some deep breathing, or a moment of quiet can help reset your focus.\n\nLong-term Strategies:\n\nDiscuss After the Event: Once the competition is over, it might be beneficial to have a conversation with your friend about their behavior and its impact on you and the team.\n\nTeam Debriefing: Having a post-competition meeting to discuss what worked and what didn't can help address any interpersonal issues and improve team dynamics for future events.\n\nBuild a Supportive Team Culture: For future competitions, establish team norms and support mechanisms. This could include how you deal with stress collectively and how you'll communicate under pressure.\n\nStress Reduction Techniques:\n\nMindfulness and Meditation: Practice mindfulness meditation to stay present and reduce anxiety. Apps like Headspace or Calm can guide you through short meditation sessions tailored to stress relief.\n\nPhysical Activity: Regular exercise can significantly reduce stress. Even short bursts of activity like walking or stretching can make a difference.\n\nProper Nutrition and Sleep: Ensure that you are eating nutritiously and getting enough sleep, as physical well-being greatly affects stress levels.\n\nHobbies and Interests: Engage in hobbies or activities you enjoy outside of math competitions to give your mind a break from the stress of competition.\n\nTime Management: Develop good time management skills so you can work on problems efficiently without rushing. Techniques like the Pomodoro Technique can help keep you focused and stress-free while working.\n\nJournaling: Writing down your thoughts and feelings can be a helpful way to process stress and gain perspective on the situation.")}
      {advice !== '' && createBox(advice, "")} 
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
    fontFamily: "Poppins_500Medium",
  },
  customBox: {
    marginTop: 20,
    backgroundColor: '#E0E0E0',
    padding: 10,
    width: 330,
    height: 100,
    justifyContent: 'center', // Centers the text vertically
    alignItems: 'center', // Centers the text horizontally
    borderRadius: 30,
  },
  customBoxText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 10,
    color: '#333',
    paddingTop: 5, // Add space between the two texts
  },
  helloText: {
    fontSize: 28,
    fontFamily: 'Poppins_500Medium',
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
    backgroundColor: '#F2F2F2', // Background color of the box
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