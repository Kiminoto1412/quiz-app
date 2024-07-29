import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { questions as questionData } from '../mocks/Quiz';
import QuestionCard from '../components/QuestionCard';
import NavigationMenu from '../components/NavigationMenu';
import { useQuizStore } from '../stores/store';
import { RootStackParamList } from '../../navigation';

type QuizScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Quiz'>;

interface IQuestion {
    question: string;
    answers: string[];
    correct: number;
}

const QuizScreen: React.FC = () => {
    const navigation = useNavigation<QuizScreenNavigationProp>();
    const [name, setName] = useState('');
    const [questions, setQuestions] = useState<IQuestion[]>([]);
    const [started, setStarted] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState<Map<number, string>>(new Map());
    const addEntry = useQuizStore((state) => state.addEntry);

    const handleSelectAnswer = (questionIndex: number, answer: string) => {
        setSelectedAnswers((prevAnswers) => new Map(prevAnswers).set(questionIndex, answer));
    };

    const handleSubmitQuiz = () => {
        let score = 0;
        questions.forEach((question, index) => {
            if (selectedAnswers.get(index) === question.answers[question.correct]) {
                score += 1;
            }
        });

        addEntry({ name, score });
        Alert.alert('Quiz Completed', `Your score: ${score}/${questions.length}`, [
            {
                text: 'OK', onPress: () => {
                    navigation.navigate('Leaderboard');
                    // Reset quiz form
                    setStarted(false);
                    setSelectedAnswers(new Map());
                    setQuestions([]);
                    setName("")
                }
            }
        ]);
    };

    useEffect(() => {
        if (started) {
            const shuffledQuestions = questionData
                .sort(() => Math.random() - 0.5)
                .map((q) => ({
                    ...q,
                    answers: q.answers.sort(() => Math.random() - 0.5),
                }));
            setQuestions(shuffledQuestions.slice(0, 20));
        }
    }, [started]);

    return (
        <View className="flex-1 bg-gray-100">
            {started ? (
                <ScrollView
                    className="flex-1"
                    contentContainerStyle={{ padding: 16, paddingBottom: 20 }}
                >
                    {questions.map((q, index) => (
                        <QuestionCard
                            key={index}
                            question={q.question}
                            answers={q.answers}
                            onSelect={(answer) => handleSelectAnswer(index, answer)}
                        />
                    ))}
                    <View className="mt-4">
                        <Button title="Submit Quiz" onPress={handleSubmitQuiz} />
                    </View>
                </ScrollView>
            ) : (
                <View className="flex-1 justify-center items-center p-4">
                    <Text className="text-xl mb-4">Enter your name to start the quiz:</Text>
                    <TextInput
                        className="border border-gray-300 p-2 rounded mb-4 w-full"
                        placeholder="Your name"
                        value={name}
                        onChangeText={setName}
                    />
                    <Button title="Start Quiz" onPress={() => setStarted(true)} />
                </View>
            )}
            <NavigationMenu />
        </View>
    );
};

export default QuizScreen;
