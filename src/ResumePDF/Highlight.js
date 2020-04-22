"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var renderer_1 = require("@react-pdf/renderer");
var styles = renderer_1.StyleSheet.create({
    container: {
        flexDirection: "row",
        display: "flex",
        marginLeft: 8,
        marginBottom: 6,
    },
    bullet: {
        marginRight: 4,
    },
});
exports.Highlight = function (_a) {
    var highlight = _a.highlight;
    return (react_1.default.createElement(renderer_1.View, { style: styles.container },
        react_1.default.createElement(renderer_1.Text, { style: styles.bullet }, "\u2022"),
        react_1.default.createElement(renderer_1.Text, null, highlight)));
};
