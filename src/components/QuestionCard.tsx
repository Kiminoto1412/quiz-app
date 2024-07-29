import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface QuestionCardProps {
  question: string;
  answers: string[];
  onSelect: (answer: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, answers, onSelect }) => {
  return (
    <View className="p-6 m-4 bg-white rounded-xl shadow-lg border border-gray-200">
      <Text className="text-xl font-semibold mb-4">{question}</Text>
      {answers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          className="p-3 mb-3 bg-blue-100 rounded-lg hover:bg-blue-200 active:bg-blue-300"
          onPress={() => onSelect(answer)}
        >
          <Text className="text-base">{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default QuestionCard;
