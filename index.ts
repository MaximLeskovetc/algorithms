import Lib from './lib';

const elem = 10000;
const repeat = 100;
const list = [];
const bubbleArr = [];
const insertionArr = [];
const mergeArr = [];
const selectArr = [];
for (let i = 0; i < elem; i++) {
    list.push(Math.floor(Math.random() * elem))
}
console.log(`-----------------${elem} elem------------------`)
for (let i = 0; i < repeat; i++) {
    let start = new Date().getTime();
    Lib.sort.bubble(list);
    let end = new Date().getTime();
    bubbleArr.push(end - start);
    start = new Date().getTime();
    Lib.sort.insertion(list);
    end = new Date().getTime();
    insertionArr.push(end - start);
    start = new Date().getTime();
    Lib.sort.merge(list);
    end = new Date().getTime();
    mergeArr.push(end - start);
    start = new Date().getTime();
    Lib.sort.selection(list);
    end = new Date().getTime();
    selectArr.push(end - start);
}

const averageValue = (arr: number[]): number => {
    if (arr.length === 1) {
        return arr[0];
    }
    return arr.reduce((cur, acc) => acc + cur, 0) / arr.length;
};

console.log(`
    bubble average time ${averageValue(bubbleArr)} ms on ${repeat} repeat\r
    insertion average time ${averageValue(insertionArr)} ms on ${repeat} repeat\r
    merge average time ${averageValue(mergeArr)} ms on ${repeat} repeat\r
    select average time ${averageValue(selectArr)} ms on ${repeat} repeat\r
`);

