import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    // We have two parts to our State
    const [leftDie, setLeft] = useState<number>(4);
    const [rightDie, setRight] = useState<number>(2);

    return (
        <div>
            <div>
                Left Die: <span data-testid="left-die">{leftDie}</span>
                <Button onClick={() => setLeft(d6())}>Roll Left</Button>
            </div>
            <div>
                Right Die:<span data-testid="right-die">{rightDie}</span>
                <Button onClick={() => setRight(d6())}>Roll Right</Button>
            </div>
            {leftDie === rightDie && leftDie != 1 && <div>You Win</div>}
            {leftDie === rightDie && leftDie === 1 && <div>You Lose</div>}
        </div>
    );
}
