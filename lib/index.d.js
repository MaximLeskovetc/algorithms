"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dfs_1 = __importDefault(require("./search/dfs"));
const bfs_1 = __importDefault(require("./search/bfs"));
const merge_1 = require("./sort/merge");
exports.search = { bfs: bfs_1.default, dfs: dfs_1.default };
exports.sort = { merge: merge_1.merge };
