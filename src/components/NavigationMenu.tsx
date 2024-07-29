import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../navigation';
import Icon from 'react-native-vector-icons/Ionicons';

type NavigationMenuProp = NativeStackNavigationProp<RootStackParamList>;

const NavigationMenu: React.FC = () => {
    const navigation = useNavigation<NavigationMenuProp>();
    return (
        <View className="flex-row p-2 gap-2 w-full">
            <TouchableOpacity className='flex-row items-center justify-center flex-1 bg-blue-600 p-2 rounded' onPress={() => navigation.navigate('Quiz')}>
                <Icon name="quiz" size={20} color="white" className="mr-2" />
                <Text className="text-white text-lg text-center">Quiz</Text>
            </TouchableOpacity >
            <TouchableOpacity className='flex-row items-center justify-center flex-1 bg-blue-600 p-2 rounded' onPress={() => navigation.navigate('Leaderboard')}>
                <Icon name="stats-chart-sharp" size={20} color="white" className="mr-2" />
                <Text className="text-white text-lg text-center">Leaderboard</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NavigationMenu;


