"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var renderer_1 = require("@react-pdf/renderer");
var DateRange_1 = require("./DateRange");
var styles = renderer_1.StyleSheet.create({
    container: {
        marginVertical: 8,
        flexWrap: "nowrap",
        borderTop: "1pt solid #ccc",
        paddingTop: 6,
    },
    institution: {
        flexDirection: "row",
        fontFamily: "Lato",
        fontSize: 12,
    },
    institutionName: {
        color: "#222",
    },
    degree: {
        fontFamily: "Open Sans Light",
        color: "#000",
        marginVertical: 0,
        fontSize: 10,
    },
    description: {
        marginBottom: 4,
        lineHeight: 1.4,
        paddingRight: 18,
        fontSize: 10,
    },
});
exports.Institution = function (_a) {
    var edu = _a.edu;
    return (react_1.default.createElement(renderer_1.View, { style: styles.container, wrap: false },
        react_1.default.createElement(renderer_1.View, { style: {
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "nowrap",
                alignItems: "center",
            } },
            react_1.default.createElement(renderer_1.View, { style: styles.institution },
                react_1.default.createElement(renderer_1.Text, { style: styles.institutionName }, edu.institution)),
            react_1.default.createElement(DateRange_1.DateRange, { start: edu.startDate, end: edu.endDate })),
        react_1.default.createElement(renderer_1.Text, { style: styles.degree },
            edu.studyType,
            " in ",
            edu.area,
            " (",
            edu.gpa,
            ")")));
};
