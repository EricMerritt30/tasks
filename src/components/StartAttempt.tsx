import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    // We have two parts to our State
    const [numberOfAttempts, setChangeNumber] = useState<number>(4);
    const [takingQuiz, setTakingQuiz] = useState<boolean>(false);

    // No parameters or return value, because it's a closure
    function start(): void {
        if (takingQuiz === false) {
            setChangeNumber(numberOfAttempts - 1);
            setTakingQuiz(true);
        }
    }

    function stop(): void {
        if (takingQuiz === true) {
            setTakingQuiz(false);
        }
    }

    return (
        <div>
            <div>
                Current Number Of Attempts: <span>{numberOfAttempts}</span>
                <Button
                    onClick={() => setChangeNumber(numberOfAttempts + 1)}
                    disabled={takingQuiz}
                >
                    Mulligan Button
                </Button>
            </div>
            <div>
                <Button
                    onClick={start}
                    disabled={takingQuiz || numberOfAttempts === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={stop} disabled={!takingQuiz}>
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}
