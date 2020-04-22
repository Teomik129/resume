import React from "react";

import { StyleSheet, Text, View } from "@react-pdf/renderer";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

const styles = StyleSheet.create({
  dates: {
    flexDirection: "row",
    fontSize: 12,
    lineHeight: 1.3,
    fontFamily: "Lato",
  },
});

const Time: React.FC<{ date: Date }> = ({ date }) => (
  <Text>{dateFormatter.format(date)}</Text>
);

export const DateRange: React.FC<{ start: Date; end: Date }> = ({
  start,
  end,
}) => {
  const $start = <Time date={start} />;
  const $end = end ? <Time date={end} /> : <Text>Present</Text>;
  return (
    <View style={styles.dates}>
      {$start}
      <Text style={{ paddingHorizontal: 4 }}>—</Text>
      {$end}
    </View>
  );
};
