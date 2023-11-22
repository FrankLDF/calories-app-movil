import React from "react";
import { StyleSheet, View } from "react-native";
import AddFoodButton from "../../atoms/add-food-button";
import Title from "../../atoms/title";

export default function AddFoodHeader({ setVisible }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Title style={styles.title} name={"Add Food"}></Title>
      </View>
      <View style={styles.rightContainer}>
        <AddFoodButton onPress={() => setVisible(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
    marginHorizontal: 10,
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "normal",
  },
});
