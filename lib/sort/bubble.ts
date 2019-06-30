/*
* @example
* list = [1, 7, 2, 3, 4, 7, 8, 9, 1, 4, 0];
* bubble(list) // [ 0, 1, 1, 2, 3, 4, 4, 7, 7, 8, 9 ]
*/
export const bubble = (arr: number[]): number[] => {
    if (!arr || !arr.length) {
        throw 'The array does not meet the requirements';
    }
    const length = arr.length;
    let wasSwap = false;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr
};