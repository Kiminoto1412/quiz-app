import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import NavigationMenu from '../components/NavigationMenu';
import { useQuizStore } from '../stores/store';
import { RootStackParamList } from '../../navigation';

type LeaderboardScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Leaderboard'>;

const LeaderboardScreen: React.FC = () => {
  const navigation = useNavigation<LeaderboardScreenNavigationProp>();
  const leaderboard = useQuizStore((state) => state.leaderboard);

  return (
    <View className="flex-1 bg-gray-100 py-2">
      <FlatList
        data={leaderboard}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="p-2 bg-white rounded mb-2">
            <Text className="text-lg">{item.name}: {item.score} points</Text>
          </View>
        )}
      />
       <NavigationMenu />
    </View>
  );
};

export default LeaderboardScreen;
