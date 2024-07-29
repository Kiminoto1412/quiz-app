import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuizScreen from './src/screens/QuizScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';
import { RootStackParamList } from './navigation'; 

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Quiz">
        <Stack.Screen name="Quiz" component={QuizScreen}  />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
