import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "../../atoms/title";
import Avatar from "../../atoms/avatar";
import Subtitle from "../../atoms/subtitle";
import { useNavigation, useRoute } from "@react-navigation/native";
import BackButton from "../../atoms/back-button";

export default function Header() {
  const navigation = useNavigation();
  const route = useRoute();

  const handleBackButtonPress = () => {
    navigation.goBack();
  };
  const shouldShowBackButton = route.name !== "Home";

  return (
    <View style={styles.container}>
      {shouldShowBackButton && <BackButton onPress={handleBackButtonPress} />}
      <View style={styles.leftContainer}>
        <Title style={styles.title} name={"Hello Ignacio Lopez"} />
        <Subtitle name={"Welcome back to your goal"} />
      </View>
      <View style={styles.rightContainer}>
        <Avatar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
    marginHorizontal: 6,
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
    fontWeight: "bold",
    fontSize: 14,
    color: "#000",
  },
});
