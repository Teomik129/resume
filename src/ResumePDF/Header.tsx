import React from "react";

import { StyleSheet, Text, View } from "@react-pdf/renderer";

import { Basics } from "./IResume";

const styles = StyleSheet.create({
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

export const Header: React.FC<{ basics: Basics }> = ({ basics }) => (
  <View style={styles.header} fixed>
    <View>
      <Text style={styles.name}>{basics.name}</Text>
      <Text style={styles.label}>{basics.label}</Text>
    </View>
    <View style={styles.contact}>
      <View style={styles.contactInner}>
        <Text>{basics.website}</Text>
        <Text>
          {basics.location.city}, {basics.location.region}
        </Text>
        <Text>{basics.phone}</Text>
        <Text>{basics.email}</Text>
      </View>
    </View>
  </View>
);
