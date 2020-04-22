"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var renderer_1 = require("@react-pdf/renderer");
var styles = renderer_1.StyleSheet.create({
    header: {
        marginBottom: 18,
        flexDirection: "row",
        justifyContent: "space-between",
        letterSpacing: 0.5,
    },
    name: {
        fontSize: 24,
        fontFamily: "Lato Bold",
    },
    label: {
        fontSize: 12,
        fontFamily: "Lato",
    },
    contact: {
        flexDirection: "row",
        flexWrap: "nowrap",
        marginTop: 4,
        fontSize: 8,
    },
    contactInner: {
        display: "flex",
        alignItems: "flex-end",
        marginRight: 12,
    },
});
exports.Header = function (_a) {
    var basics = _a.basics;
    return (react_1.default.createElement(renderer_1.View, { style: styles.header, fixed: true },
        react_1.default.createElement(renderer_1.View, null,
            react_1.default.createElement(renderer_1.Text, { style: styles.name }, basics.name),
            react_1.default.createElement(renderer_1.Text, { style: styles.label }, basics.label)),
        react_1.default.createElement(renderer_1.View, { style: styles.contact },
            react_1.default.createElement(renderer_1.View, { style: styles.contactInner },
                react_1.default.createElement(renderer_1.Text, null, basics.website),
                react_1.default.createElement(renderer_1.Text, null,
                    basics.location.city,
                    ", ",
                    basics.location.region),
                react_1.default.createElement(renderer_1.Text, null, basics.phone),
                react_1.default.createElement(renderer_1.Text, null, basics.email)))));
};
