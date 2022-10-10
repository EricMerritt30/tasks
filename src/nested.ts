import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const newArray = questions.filter(
        (ques: Question): boolean => ques.published === true
    );
    return newArray;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmpty = questions.filter(
        (ques: Question): boolean =>
            ques.body != "" || ques.options[0] != null || ques.expected != ""
    );
    return nonEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const quesWithID = questions.filter(
        (ques: Question): boolean => ques.id === id
    );
    return quesWithID.length != 1 ? null : quesWithID[0];
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const noID = questions.filter((ques: Question): boolean => ques.id != id);
    return noID;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const newArray = questions.map((ques: Question): string => ques.name);
    return newArray;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const totalPoints = questions.reduce(
        (currentSum: number, ques: Question) => currentSum + ques.points,
        0
    );
    return totalPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const filteredQues = questions.filter(
        (ques: Question): boolean => ques.published === true
    );
    const totalPubPoints = filteredQues.reduce(
        (currentSum: number, ques: Question) => currentSum + ques.points,
        0
    );
    return totalPubPoints;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const s = questions
        .map(
            (ques: Question): string =>
                ques.id +
                "," +
                ques.name +
                "," +
                ques.options.length +
                "," +
                ques.points +
                "," +
                ques.published
        )
        .join("\n");
    return "id,name,options,points,published\n" + s;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answer = questions.map((ques: Question) => ({
        questionId: ques.id,
        text: "",
        submitted: false,
        correct: false
    }));
    return answer;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const allPub = questions.map((ques: Question) => ({
        ...ques,
        published: true
    }));
    return allPub;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    let ans = false;
    const onlyMultiple = questions.filter(
        (ques: Question) => ques.type === "multiple_choice_question"
    );
    const onlyShort = questions.filter(
        (ques: Question) => ques.type === "short_answer_question"
    );
    if (
        onlyMultiple.length === questions.length ||
        onlyShort.length === questions.length
    ) {
        ans = true;
    }
    return ans;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    return questions.map((ques: Question) =>
        ques.id === targetId ? { ...ques, name: newName } : { ...ques }
    );
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const newQues = questions.map((ques: Question) =>
        ques.id === targetId
            ? { ...ques, type: newQuestionType, options: [] }
            : { ...ques }
    );
    return newQues;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const newQues = questions.map((ques: Question): Question => {
        if (ques.id === targetId) {
            if (targetOptionIndex === -1) {
                return {
                    ...ques,
                    options: [...ques.options, newOption]
                };
            } else {
                const trickyQue = {
                    ...ques,
                    options: [...ques.options]
                };
                trickyQue.options.splice(targetOptionIndex, 1, newOption);
                return trickyQue;
            }
        }
        return ques;
    });
    return newQues;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const targetIndex: number = questions.findIndex(
        (ques: Question): boolean => ques.id === targetId
    );
    const newQuesArr = questions.map((ques: Question) => ques);
    newQuesArr.splice(
        targetIndex + 1,
        0,
        duplicateQuestion(newId, questions[targetIndex])
    );
    return newQuesArr;
}
