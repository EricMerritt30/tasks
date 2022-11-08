import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [attRemain, setAttRemain] = useState<number>(3);
    const [attWant, setAttWant] = useState<number>(0);

    function deleteAttempt() {
        setAttRemain(attRemain - 1);
    }

    function addAttempt() {
        isNaN(attWant)
            ? setAttRemain(attRemain)
            : setAttRemain(attRemain + attWant);
    }

    function checkAttempts(event: ChangeEvent) {
        setAttWant(parseInt(event.target.value));
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="att">
                <Form.Label> Attempts: {attRemain}</Form.Label>
                <Form.Control
                    type="number"
                    value={checkAttempts.toString()}
                    onChange={checkAttempts}
                />
            </Form.Group>
            <Button onClick={addAttempt}> GAIN </Button>
            <Button onClick={deleteAttempt} disabled={attRemain == 0}>
                USE
            </Button>
        </div>
    );
}
