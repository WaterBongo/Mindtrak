import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Home from './pages/Home';
import Create from './pages/Create';
import Survey from './pages/Survey';

const homeName = 'Home';
const createName = 'Create';
const surveyName = 'Survey';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    headerShown: false, // Add this line to hide the header
                    tabBarIcon: ({ focused }) => {
                        let image;
                        let rn = route.name;

                        if (rn === homeName) {
                            image = focused ? require('./assets/homefocused.webp') : require('./assets/Home.webp');
                        } else if (rn === createName) {
                            image = focused ? require('./assets/createfocused.webp') : require('./assets/create.webp');
                        }
                        else if (rn === surveyName) {
                            image = focused ? require('./assets/surveyfocused.webp') : require('./assets/survey.webp');
                        }

                        return <Image source={image} style={{ width: 30, height: 30 }} />;
                    },
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#689794',
                        borderTopRightRadius: 30,
                        borderTopLeftRadius: 30,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        position: 'absolute',
                        bottom: 20,
                        left: 10,
                        right: 10,
                        height: 80,
                        paddingBottom: 10,
                    }
                })}>
                 
                <Tab.Screen name={homeName} component={Home}/>
                <Tab.Screen name={createName} component={Create}/>
                <Tab.Screen name={surveyName} component={Survey}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}

//#689794