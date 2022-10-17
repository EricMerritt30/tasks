import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const answer = "42";
    const [visible, setVisibility] = useState<boolean>(false);
    function changeVisibility(): void {
        setVisibility(visible === true ? false : true);
    }
    return (
        <div>
            <Button onClick={changeVisibility}>Reveal Answer</Button>
            {visible && answer}
        </div>
    );
}
