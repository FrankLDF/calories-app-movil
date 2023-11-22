import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Subtitle({ name }) {
  return (
    <View>
      <Text style={styles.subtitle}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 12,
    color: "#808080",
  },
});
