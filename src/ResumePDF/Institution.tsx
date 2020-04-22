import React from "react";

import { StyleSheet, Text, View } from "@react-pdf/renderer";

import { DateRange } from "./DateRange";
import { Education } from "./IResume";

const styles = StyleSheet.create({
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

export const Institution: React.FC<{ edu: Education }> = ({ edu }) => {
  return (
    <View style={styles.container} wrap={false}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          alignItems: "center",
        }}
      >
        <View style={styles.institution}>
          <Text style={styles.institutionName}>{edu.institution}</Text>
        </View>
        <DateRange start={edu.startDate} end={edu.endDate} />
      </View>
      <Text style={styles.degree}>
        {edu.studyType} in {edu.area} ({edu.gpa})
      </Text>
    </View>
  );
};
