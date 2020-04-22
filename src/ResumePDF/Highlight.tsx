import React from "react";

import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    display: "flex",
    marginLeft: 8,
    marginBottom: 6,
  },
  bullet: {
    marginRight: 4,
  },
});

export const Highlight: React.FC<{
  highlight: string;
}> = ({ highlight }) => (
  <View style={styles.container}>
    <Text style={styles.bullet}>•</Text>
    <Text>{highlight}</Text>
  </View>
);
