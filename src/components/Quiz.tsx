import { useCallback, useState } from "react";
import QUESTIONS from '../data/questions.ts';
import COMPLETION_LOGO from '../assets/quiz-complete.png';
import { Question } from "./Question.tsx";

export const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState<string[]>([]);
    const selectedQuestionIndex = userAnswers.length;
    const isQuizComplete = selectedQuestionIndex === QUESTIONS.length;

    const storeSelectedAnswer = useCallback((answer: string | null) => {
        if (!answer) answer = 'Timeout';
        setUserAnswers((prevAnswers: string[]) => [...prevAnswers, answer]);
    }, []);

    if (isQuizComplete) {
        return (
            <div id="summary">
                <img src={COMPLETION_LOGO} alt="Quiz Completion Logo" />
                <h2>Quiz Completed!</h2>
            </div>
        );
    }

    return (
        <div id="quiz">
            <Question
                key={selectedQuestionIndex}
                questionIndex={selectedQuestionIndex}
                selectedAnswer={userAnswers[userAnswers.length - 1]}
                storeSelectedAnswer={storeSelectedAnswer}
             />
        </div>
    );
}