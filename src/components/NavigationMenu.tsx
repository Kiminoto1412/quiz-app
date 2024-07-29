import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../navigation';

type NavigationMenuProp = NativeStackNavigationProp<RootStackParamList>;

const NavigationMenu: React.FC = () => {
    const navigation = useNavigation<NavigationMenuProp>();
    return (
        <View className="flex-row justify-around items-center p-4 bg-blue-600">
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
                <Text className="text-white text-lg">Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Leaderboard')}>
                <Text className="text-white text-lg">Leaderboard</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NavigationMenu;
