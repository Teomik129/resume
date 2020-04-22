"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var renderer_1 = require("@react-pdf/renderer");
var Experiences_1 = require("./Experiences");
var Header_1 = require("./Header");
var Institutions_1 = require("./Institutions");
var styles = renderer_1.StyleSheet.create({
    page: {
        padding: 14,
        fontSize: 12,
        fontFamily: "Open Sans",
    },
});
exports.ResumePDF = function (_a) {
    var resume = _a.resume;
    var basics = resume.basics, work = resume.work, education = resume.education, volunteer = resume.volunteer;
    return (react_1.default.createElement(renderer_1.Document, { title: "Resume of Jules Amosah", author: "Jules Amosah", subject: "Resume", keywords: ["jules", "amosah", "developer"].join(", ") },
        react_1.default.createElement(renderer_1.Page, { size: "A4", style: styles.page },
            react_1.default.createElement(Header_1.Header, { basics: basics }),
            react_1.default.createElement(Institutions_1.Institutions, { education: education }),
            react_1.default.createElement(Experiences_1.Experiences, { exps: work, type: "work" }),
            react_1.default.createElement(Experiences_1.Experiences, { exps: volunteer, type: "volunteer" }))));
};
