/*
* @example
* list = [1, 7, 2, 3, 4, 7, 8, 9, 1, 4, 0];
* select(list) // [ 0, 1, 1, 2, 3, 4, 4, 7, 7, 8, 9 ]
*/

export const select = (arr: number[]): number[] => {
    if (!arr || !arr.length) {
        throw 'The array does not meet the requirements';
    }
    for (let i = 0; i < arr.length - 1; i++) {
        let indexMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            indexMin = j;
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
        }
    }
    return arr;
};
