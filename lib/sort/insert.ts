/*
* @example
* list = [1, 7, 2, 3, 4, 7, 8, 9, 1, 4, 0];
* insert(list) // [ 0, 1, 1, 2, 3, 4, 4, 7, 7, 8, 9 ]
*/

export const insert = (arr: number[]): number[] => {
    if (!arr || !arr.length) {
        throw 'The array does not meet the requirements';
    }
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
};
