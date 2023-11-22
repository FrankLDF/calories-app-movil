import React from "react";
import { Button, Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const { canGoBack, goBack } = useNavigation();

  return canGoBack ? (
    <Button
      icon={<Icon name="arrow-back" size={24} />}
      type="clear"
      onPress={() => goBack()}
    ></Button>
  ) : undefined;
};

export default BackButton;
