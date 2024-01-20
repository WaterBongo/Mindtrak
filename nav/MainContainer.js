import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Home from './pages/Home';
import Create from './pages/Create';

const homeName = 'Home';
const createName = 'Create';

const Tab = createBottomTabNavigator();


export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let image;
                        let rn = route.name;

                        if (rn === homeName) {
                            image = focused ? require('./assets/homefocused.webp') : require('./assets/Home.webp');
                        } else if (rn === createName) {
                            image = focused ? require('./assets/createfocused.webp') : require('./assets/create.webp');
                        }

                        // Set a fixed size for the images
                        return <Image source={image} style={{ width: 24, height: 24 }} />;
                    },
                })}>
                 
                <Tab.Screen name={homeName} component={Home}/>
                <Tab.Screen name={createName} component={Create}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}




// tabBarOptions={{
//     activeTintColor: 'tomato', // Color of the icon and text when the tab is active
//     inactiveTintColor: 'gray', // Color of the icon and text when the tab is inactive
//     style: {
//         backgroundColor: '#1e90ff', // Background color of the navigation bar
//         // Add additional styling if needed
//     },
// }}