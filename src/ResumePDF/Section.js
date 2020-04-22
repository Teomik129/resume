"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var renderer_1 = require("@react-pdf/renderer");
var styles = renderer_1.StyleSheet.create({
    section: {
        fontFamily: "Open Sans Light",
        fontSize: 18,
        color: "#555",
    },
});
exports.Section = function (_a) {
    var title = _a.title, children = _a.children;
    return (react_1.default.createElement(renderer_1.View, { wrap: false },
        title && react_1.default.createElement(renderer_1.Text, { style: styles.section }, title),
        react_1.default.createElement(renderer_1.View, null, children)));
};
