import { useState } from "react";
import { Answer } from "./Answer";
import { QuestionTimer } from "./QuestionTimer";
import QUESTIONS from "../data/questions";

export const Question = ({
    questionIndex,
    storeSelectedAnswer
}: any) => {
    const [ answer, setAnswer ] = useState<any>({
        selectedAnswer: null,
        isCorrect: null
    });
    const handleSelectAnswer = (answer: string) => {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[questionIndex].answers[0] === answer
            });

            setTimeout(() => {
                storeSelectedAnswer(answer);
            }, 2000)
        }, 1000);
    }

    let answerState = '';
    if (answer.selectedAnswer && answer.isCorrect != null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    }
    return (
        <div id="question">
            <QuestionTimer
                timeout={10000} 
                onTimeout={() => storeSelectedAnswer(null)} 
            />
            <h2>
                {QUESTIONS[questionIndex].text}
            </h2>
            <Answer
                answers={QUESTIONS[questionIndex].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
             />
        </div>
    )
}