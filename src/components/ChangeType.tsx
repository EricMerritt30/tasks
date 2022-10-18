import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [kind, setType] = useState<QuestionType>("short_answer_question");
    function changeType(): void {
        setType(
            kind === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    }
    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            {kind === "multiple_choice_question" && <div>Multiple Choice</div>}
            {kind === "short_answer_question" && <div>Short Answer</div>}
        </div>
    );
}
