import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { questions as questionData } from '../mocks/Quiz';
import QuestionCard from '../components/QuestionCard';
import NavigationMenu from '../components/NavigationMenu';
import { useQuizStore } from '../stores/store';
import { RootStackParamList } from '../../navigation';

type QuizScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Quiz'>;

const QuizScreen: React.FC = () => {
    const navigation = useNavigation<QuizScreenNavigationProp>();
    const [name, setName] = useState('');
    const [questions, setQuestions] = useState<IQuestion[]>([]);
    const [score, setScore] = useState(0);
    const [started, setStarted] = useState(false);
    const addEntry = useQuizStore((state) => state.addEntry);

    useEffect(() => {
        const shuffledQuestions = questionData
            .sort(() => Math.random() - 0.5)
            .map((q) => ({
                ...q,
                answers: q.answers.sort(() => Math.random() - 0.5),
            }));
        setQuestions(shuffledQuestions.slice(0, 20));
    }, []);

    const handleSelectAnswer = (questionIndex: number, answer: string) => {
        if (questions[questionIndex].answers[questions[questionIndex].correct] === answer) {
            setScore(score + 1);
        }
    };

    const handleSubmitQuiz = () => {
        addEntry({ name, score });
        navigation.navigate('Leaderboard');
    };

    if (!started) {
        return (
            <View className="flex-1 justify-center items-center p-4 bg-gray-100">
                <NavigationMenu />
                <Text className="text-xl text-red-300 mb-4">Enter your name to start the quiz:</Text>
                <TextInput
                    className="border border-gray-300 p-2 rounded mb-4 w-full"
                    placeholder="Your name"
                    value={name}
                    onChangeText={setName}
                />
                <Button title="Start Quiz" onPress={() => setStarted(true)} />
            </View>
        );
    }

    return (
        <ScrollView className="flex-1 p-4 bg-gray-100">
            <NavigationMenu />
            {questions.map((q, index) => (
                <QuestionCard
                    key={index}
                    question={q.question}
                    answers={q.answers}
                    onSelect={(answer) => handleSelectAnswer(index, answer)}
                />
            ))}
            <Button title="Submit Quiz" onPress={handleSubmitQuiz} />
        </ScrollView>
    );
};

export default QuizScreen;
