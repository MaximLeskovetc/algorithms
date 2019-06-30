"use strict";
/*
* @example
* graph = [
*     [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
*     [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
*     [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
*     [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
*     [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
*     [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
*     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
*     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
*     [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
*     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
*     [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
*     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
*     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
*     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
* ];
* dfs(graph, 1, 13) // [ 1, 5, 6, 10, 13 ]
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (graph, startNode, targetNode) => {
    const buildPath = (parents) => {
        const result = [targetNode];
        while (parents[targetNode] !== 0) {
            targetNode = parents[targetNode];
            result.push(targetNode);
        }
        return result.reverse();
    };
    const stack = [startNode];
    const visited = [startNode];
    const parents = [];
    parents[startNode] = 0;
    while (stack.length) {
        const node = stack.pop();
        if (node === targetNode) {
            return buildPath(parents);
        }
        graph[node].forEach((line, index) => {
            if (index !== node && line && !visited.includes(index)) {
                stack.push(index);
                visited.push(index);
                parents[index] = node;
            }
        });
    }
    throw 'Path not found';
};
