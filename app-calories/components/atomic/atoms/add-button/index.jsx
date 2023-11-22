import React from "react";
import { Button, Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const AddButton = () => {
  const navigation = useNavigation();

  const handleAddButtonPress = () => {
    navigation.navigate("AddFood");
  };

  return (
    <Button
      icon={<Icon name="add-circle-outline" color="#fff" />}
      radius="lg"
      color="#4ecb71"
      onPress={handleAddButtonPress}
    ></Button>
  );
};

export default AddButton;
