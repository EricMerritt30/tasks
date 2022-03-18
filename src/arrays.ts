import {
    isExpressionWithTypeArguments,
    isNumericLiteral,
    sortAndDeduplicateDiagnostics
} from "typescript";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let a: number[] = [];
    const x = numbers.at(0);
    const y = numbers.at(numbers.length - 1);
    if (x !== undefined && y !== undefined) {
        a = [x, y];
    }
    return a;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => (num ? num * 3 : 0));
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const toInt = numbers.map((numStr: string): number =>
        parseInt(numStr) ? parseInt(numStr) : 0
    );
    return toInt;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const toInt = amounts.map((dollars: string): string =>
        dollars.at(0) == "$" ? dollars.filter() : 0
    );
    return [];
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return [];
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return 0;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let x = true;
    colors.map((color: string): boolean =>
        color === "red" || color === "green" || color === "blue" || color === ""
            ? true
            : (x = false)
    );
    return x;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let str = "";
    let sum = 0;
    addends.map((num: number): string =>
        num != addends.at(length - 1)
            ? (str = str + num.toString() + "+")
            : (str = str + num.toString())
    );

    if (addends.length === 0) {
        str = "0";
    }

    addends.map((num: number): number => (num ? (sum += num) : 0));
    return sum.toString() + "=" + str;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum = 0;
    const x = values.map((value: number): number =>
        value < 0
            ? values.splice(values.indexOf(value), 0, sum)
            : (sum += value)
    );
    return [];
}
