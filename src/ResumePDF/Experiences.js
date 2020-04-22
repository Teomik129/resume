"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Experience_1 = require("./Experience");
var Section_1 = require("./Section");
exports.Experiences = function (_a) {
    var exps = _a.exps, type = _a.type;
    return (react_1.default.createElement(Section_1.Section, { title: type === "work" ? "Professional Experience" : "Volunteering" }, exps.map(function (w) { return (react_1.default.createElement(Experience_1.Experience, { key: w.summary, exp: w })); })));
};
