import React from "react";

import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: {
    fontFamily: "Open Sans Light",
    fontSize: 18,
    color: "#555",
  },
});

export const Section: React.FC<{ title: string }> = ({ title, children }) => (
  <View wrap={false}>
    {title && <Text style={styles.section}>{title}</Text>}
    <View>{children}</View>
  </View>
);
