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