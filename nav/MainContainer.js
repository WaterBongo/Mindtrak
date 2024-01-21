import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Home from './pages/Home';
import Create from './pages/Create';
import Survey from './pages/Survey';
import Health from './pages/Health';

const homeName = 'Home';
const createName = 'Create';
const surveyName = 'Survey';
const healthName = 'Health';

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
                            image = focused ? require('./assets/homefocused.png') : require('./assets/home.png');
                        } else if (rn === createName) {
                            image = focused ? require('./assets/createfocused.png') : require('./assets/create.png');
                        }
                        else if (rn === surveyName) {
                            image = focused ? require('./assets/surveyfocused.png') : require('./assets/survey.png');
                        }
                        else if (rn === healthName) {
                            image = focused ? require('./assets/healthfocused.png') : require('./assets/health.png');
                        }

                        return <Image source={image} style={{ width: 50, height: 50 }} />;
                    },
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#689794',
                        borderTopRightRadius: 60,
                        borderTopLeftRadius: 60,
                        borderBottomLeftRadius: 60,
                        borderBottomRightRadius: 60,
                        position: 'absolute',
                        bottom: 10,
                        left: 10,
                        right: 10,
                        height: 60,
                        paddingTop: 10,
                        paddingBottom: 10,
                    }
                })}>
                 
                <Tab.Screen name={homeName} component={Home}/>
                <Tab.Screen name={createName} component={Create}/>
                <Tab.Screen name={surveyName} component={Survey}/>
                <Tab.Screen name={healthName} component={Health}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}

//#689794