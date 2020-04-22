import React from "react";

import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";

import { DateRange } from "./DateRange";
import { Highlight } from "./Highlight";
import { Volunteer, Work } from "./IResume";

const styles = StyleSheet.create({
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

const Separator: React.FC = () => (
  <Text style={{ marginHorizontal: 4 }}>-</Text>
);

export const Experience: React.FC<{ exp: Work | Volunteer }> = ({ exp }) => {
  const $highlights = exp.highlights.map((hl: string) => (
    <Highlight key={hl} highlight={hl} />
  ));

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
        <View style={styles.group}>
          <Text style={styles.groupName}>
            {(exp as Work).company ?? (exp as Volunteer).organization}
          </Text>
          <Separator />
          <Link src={exp.website}>{exp.website}</Link>
        </View>
        <DateRange start={exp.startDate} end={exp.endDate} />
      </View>
      <Text style={styles.title}>{exp.position}</Text>
      {exp.summary && <Text style={styles.description}>{exp.summary}</Text>}
      {$highlights.length > 0 && (
        <View style={styles.highlights}>{$highlights}</View>
      )}
    </View>
  );
};
