import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface QuestionCardProps {
  question: string;
  answers: string[];
  onSelect: (answer: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, answers, onSelect }) => {

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handlePress = (answer: string) => {
    setSelectedAnswer(answer);
    onSelect(answer);
  };

  return (
    <View className="p-6 m-4 bg-white rounded-xl shadow-lg border border-gray-200">
      <Text className="text-xl font-semibold mb-4">{question}</Text>
      {answers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          className={`p-3 mb-3 rounded-lg ${selectedAnswer === answer ? 'bg-green-600' : 'bg-blue-100'} ${selectedAnswer !== answer ? 'hover:bg-blue-200 active:bg-blue-300' : ''}`}
          onPress={() => handlePress(answer)}
        >
          <Text className={`text-base ${selectedAnswer === answer ? 'text-white' : 'text-black'}`}>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default QuestionCard;
