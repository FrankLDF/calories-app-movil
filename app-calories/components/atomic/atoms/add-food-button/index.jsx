import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon } from "@rneui/themed";

export default function AddFoodButton({ onPress }) {
  return (
    <View>
      <Button
        icon={<Icon name="add-circle-outline" color="#fff" />}
        radius="lg"
        color="#4ecb71"
        onPress={onPress}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#000",
    justifyContent: "center",
    fontSize: 15,
  },
});
