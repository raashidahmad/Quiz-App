import { useRef } from "react";

export const Answer = ({ answers, selectedAnswer, answerState, onSelect }: any) => {
    const shuffledAnswers = useRef<any>();
    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
        {shuffledAnswers.current.map((answer: string) => {
            let cssClass = '';
            const isSelected = selectedAnswer != null;
            if (answerState === 'answered' && isSelected) {
                cssClass = 'selected';
            }

            if ((answerState === 'correct' || answerState === 'wrong' && isSelected)) {
                cssClass = answerState;
            }
            return <li key={answer} className="answer">
                <button className={cssClass} onClick={() => onSelect(answer)}>{answer}</button>
            </li>
        })}
    </ul>
    );
}