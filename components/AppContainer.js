import React from 'react';
// import { StackNavigator } from 'react-navigation';
import { lightestBlue, black } from '../utils/colors';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import CreateNewDeck from './CreateNewDeck';
import Deck from './Deck';
import CreateNewCard from './CreateNewCard';
import Quiz from './Quiz';

const Stack = createStackNavigator();

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateNewDeck" component={CreateNewDeck} />
        <Stack.Screen name="Deck" component={Deck} />
        <Stack.Screen name="CreateNewCard" component={CreateNewCard} />
        <Stack.Screen name="Quiz" component={Quiz} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;


// const AppContainer = StackNavigator(
//   {
//     Home: {
//       screen: Home
//     },
//     CreateNewDeck: {
//       screen: CreateNewDeck
//     },
//     Deck: {
//       screen: Deck
//     },
//     CreateNewCard: {
//       screen: CreateNewCard
//     },
//     Quiz: {
//       screen: Quiz
//     }
//   },
//   {
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: black
//       },
//       headerTitleStyle: {
//         color: lightestBlue,
//         fontSize: 18
//       },
//       headerBackTitleStyle: {
//         color: lightestBlue,
//         fontSize: 16
//       },
//       headerTintColor: lightestBlue
//     }
//   }
// );

// export default AppContainer;