import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Christmas"
        | "Halloween"
        | "Eric's Bday"
        | "Thanksgiving"
        | "MLK Day";

    const [holiday, setHoliday] = useState<Holiday>("Eric's Bday");

    function nextHolidayAlpha(holi: Holiday): void {
        if (holi === "Christmas") {
            setHoliday("Eric's Bday");
        } else if (holi === "Eric's Bday") {
            setHoliday("Halloween");
        } else if (holi === "Halloween") {
            setHoliday("MLK Day");
        } else if (holi === "MLK Day") {
            setHoliday("Thanksgiving");
        } else {
            setHoliday("Christmas");
        }
    }
    function nextHolidayYear(holi: Holiday): void {
        if (holi === "Christmas") {
            setHoliday("MLK Day");
        } else if (holi === "MLK Day") {
            setHoliday("Eric's Bday");
        } else if (holi === "Eric's Bday") {
            setHoliday("Halloween");
        } else if (holi === "Halloween") {
            setHoliday("Thanksgiving");
        } else {
            setHoliday("Christmas");
        }
    }

    function emoji(holi: Holiday): string {
        let emoji = "";
        if (holi === "Eric's Bday") {
            emoji = "🎂";
        } else if (holi === "Christmas") {
            emoji = "🎁";
        } else if (holi === "MLK Day") {
            emoji = "✊";
        } else if (holi === "Halloween") {
            emoji = "🎃";
        } else {
            emoji = "🦃";
        }
        return emoji;
    }

    return (
        <div>
            <div>
                Current Holiday: <span>{holiday}</span> {emoji(holiday)}
            </div>
            <div>
                <Button onClick={() => nextHolidayAlpha(holiday)}>
                    Advance By Alphabet
                </Button>
            </div>
            <div>
                <Button onClick={() => nextHolidayYear(holiday)}>
                    Advance By Year
                </Button>
            </div>
        </div>
    );
}
