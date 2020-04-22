"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var renderer_1 = require("@react-pdf/renderer");
var dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
});
var styles = renderer_1.StyleSheet.create({
    dates: {
        flexDirection: "row",
        fontSize: 12,
        lineHeight: 1.3,
        fontFamily: "Lato",
    },
});
var Time = function (_a) {
    var date = _a.date;
    return (react_1.default.createElement(renderer_1.Text, null, dateFormatter.format(date)));
};
exports.DateRange = function (_a) {
    var start = _a.start, end = _a.end;
    var $start = react_1.default.createElement(Time, { date: start });
    var $end = end ? react_1.default.createElement(Time, { date: end }) : react_1.default.createElement(renderer_1.Text, null, "Present");
    return (react_1.default.createElement(renderer_1.View, { style: styles.dates },
        $start,
        react_1.default.createElement(renderer_1.Text, { style: { paddingHorizontal: 4 } }, "\u2014"),
        $end));
};
