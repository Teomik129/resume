import React from "react";

import { Document, Page, StyleSheet } from "@react-pdf/renderer";

import { Experiences } from "./Experiences";
import { Header } from "./Header";
import { Institutions } from "./Institutions";
import { Resume } from "./IResume";

const styles = StyleSheet.create({
  page: {
    padding: 14,
    fontSize: 12,
    fontFamily: "Open Sans",
  },
});

export const ResumePDF: React.FC<{ resume: Resume }> = ({ resume }) => {
  const { basics, work, education, volunteer } = resume;

  return (
    <Document
      title="Resume of Jules Amosah"
      author="Jules Amosah"
      subject="Resume"
      keywords={["jules", "amosah", "developer"].join(", ")}
    >
      <Page size="A4" style={styles.page}>
        <Header basics={basics} />
        <Institutions education={education} />
        <Experiences exps={work} type="work" />
        <Experiences exps={volunteer} type="volunteer" />
      </Page>
    </Document>
  );
};
