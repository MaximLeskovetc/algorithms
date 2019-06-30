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

export function dfs(graph: number[][], startNode: number, targetNode: number): number[] {
    const buildPath = (parents: number[]) => {
        const result: number[] = [targetNode];
        while (parents[targetNode] !== 0) {
            targetNode = parents[targetNode];
            result.push(targetNode);
        }
        return result.reverse();
    };
    const stack: number[] = [startNode];
    const visited: number[] = [startNode];
    const parents: number[] = [];
    parents[startNode] = 0;
    while (stack.length) {
        const node = stack.pop() as number;
        if (node === targetNode) {
            return buildPath(parents);
        }
        graph[node].forEach((line: number, index: number) => {
            if (index !== node && line && !visited.includes(index)) {
                stack.push(index);
                visited.push(index);
                parents[index] = node;
            }
        })
    }
    throw 'Path not found'
};