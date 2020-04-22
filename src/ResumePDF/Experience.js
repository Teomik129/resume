"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var renderer_1 = require("@react-pdf/renderer");
var DateRange_1 = require("./DateRange");
var Highlight_1 = require("./Highlight");
var styles = renderer_1.StyleSheet.create({
    container: {
        marginVertical: 20,
        flexWrap: "nowrap",
        borderTop: "1pt solid #ccc",
        paddingTop: 6,
    },
    group: {
        flexDirection: "row",
        fontFamily: "Lato",
        fontSize: 12,
    },
    groupName: {
        color: "#222",
    },
    title: {
        fontSize: 18,
        fontFamily: "Open Sans Light",
        color: "#000",
        marginVertical: 0,
    },
    description: {
        marginBottom: 4,
        lineHeight: 1.4,
        paddingRight: 18,
        fontSize: 10,
    },
    highlights: {
        paddingRight: 24,
        lineHeight: 1.4,
        fontSize: 10,
    },
});
var Separator = function () { return (react_1.default.createElement(renderer_1.Text, { style: { marginHorizontal: 4 } }, "-")); };
exports.Experience = function (_a) {
    var exp = _a.exp;
    var _b;
    var $highlights = exp.highlights.map(function (hl) { return (react_1.default.createElement(Highlight_1.Highlight, { key: hl, highlight: hl })); });
    return (react_1.default.createElement(renderer_1.View, { style: styles.container, wrap: false },
        react_1.default.createElement(renderer_1.View, { style: {
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "nowrap",
                alignItems: "center",
            } },
            react_1.default.createElement(renderer_1.View, { style: styles.group },
                react_1.default.createElement(renderer_1.Text, { style: styles.groupName }, (_b = exp.company) !== null && _b !== void 0 ? _b : exp.organization),
                react_1.default.createElement(Separator, null),
                react_1.default.createElement(renderer_1.Link, { src: exp.website }, exp.website)),
            react_1.default.createElement(DateRange_1.DateRange, { start: exp.startDate, end: exp.endDate })),
        react_1.default.createElement(renderer_1.Text, { style: styles.title }, exp.position),
        exp.summary && react_1.default.createElement(renderer_1.Text, { style: styles.description }, exp.summary),
        $highlights.length > 0 && (react_1.default.createElement(renderer_1.View, { style: styles.highlights }, $highlights))));
};
