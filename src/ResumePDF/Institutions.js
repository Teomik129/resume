"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Institution_1 = require("./Institution");
var Section_1 = require("./Section");
exports.Institutions = function (_a) {
    var education = _a.education;
    return (react_1.default.createElement(Section_1.Section, { title: "Education" }, education.map(function (edu) { return (react_1.default.createElement(Institution_1.Institution, { key: edu.institution, edu: edu })); })));
};
