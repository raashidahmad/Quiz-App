import { useEffect, useState } from "react";

export const QuestionTimer = ({ timeout, onTimeout }: any) => {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(() => {
            onTimeout();
        }, timeout);

        return () => {
            clearTimeout(timer);
        }
    }, [onTimeout, timeout])
   

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime((prevTime: number) => {
                return prevTime - 100;
            });
        }, 100);

        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <progress id="question-time" value={remainingTime} max={timeout} />
    );
}