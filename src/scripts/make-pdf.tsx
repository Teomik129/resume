#!/usr/bin/env node

import React from "react";

import { promises as fs } from "fs";
import { resolve } from "path";

import ReactPDF, { Font } from "@react-pdf/renderer";
import YAML from "yamljs";

import { ResumePDF } from "../ResumePDF";

[
  ["Open Sans", "../fonts/Open_Sans/OpenSans-Regular.ttf"],
  ["Open Sans Light", "../fonts/Open_Sans/OpenSans-Light.ttf"],
  ["Lato", "../fonts/Lato/Lato-Regular.ttf"],
  ["Lato Bold", "../fonts/Lato/Lato-Bold.ttf"],
].forEach(([family, path]) =>
  Font.register({ family, src: resolve(__dirname, path) })
);

async function main(): Promise<void> {
  const resume = await fs
    .readFile(resolve(__dirname, "..", "resume.yml"))
    .then((res) => YAML.parse(res.toString()));

  ReactPDF.render(<ResumePDF resume={resume} />, "resume-amosah.pdf");
}

main();
