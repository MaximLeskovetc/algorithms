/*
* @example
*
* list =
* [0, 1, 0, 1, 0, 0, 1, 0, 1,
*  0, 1, 0, 0, 0, 0, 0, 1, 1,
*  1, 1, 1, 1, 1, 1, 0, 0, 1,
*  0, 1, 0, 0, 1, 0, 1, 0, 1,
*  0, 0, 1, 1, 1, 1, 1, 1, 1,
*  1, 0, 0, 1, 0, 1, 0, 1, 0,
*  1, 1, 1, 1, 1, 1, 0, 0, 0,
*  1, 0, 0, 1, 0, 0, 0, 0, 0,
*  0, 1, 1,]
*
* twoColorFlag(list) //
* [ 0,  0,  0,  0,  0,  0,  0,  0,  0,
*   0,  0,  0,  0,  0,  0,  0,  0,  0,
*   0,  0,  0,  0,  0,  0,  0,  0,  0,
*   0,  0,  0,  0,  0,  0,  0,  0,  0,
*   1,  1,  1,  1,  1,  1,  1,  1,  1,
*   1,  1,  1,  1,  1,  1,  1,  1,  1,
*   1,  1,  1,  1,  1,  1,  1,  1,  1,
*   1,  1,  1,  1,  1,  1,  1,  1,  1,
*   1,  1,  1,]
*/

export const twoColorFlag = (arr: number[]): number[] => {
    if (!arr || !arr.length) {
        throw 'The array does not meet the requirements';
    }
    let first = 0;
    let last = arr.length - 1;

    while (first < last) {
        if (arr[first] > arr[last]) {
            const temp = arr[first];
            arr[first] = arr[last];
            arr[last] = temp;
            first++;
            last--;
        } else if (arr[first] === arr[last]) {
            if (arr[first] === 0) {
                first++;
            } else {
                last--;
            }
        } else if (arr[first] < arr[last]) {
            first++;
            last--;
        }
    }

    return arr;
};
