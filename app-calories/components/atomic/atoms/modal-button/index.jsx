import React from "react";
import { Button, Icon } from "@rneui/themed";

const ModalAddButton = ({ disabled, onPress }) => {
  return (
    <Button
      title="Add"
      icon={<Icon name="add" color="#fff" />}
      radius="lg"
      color="#4ecb71"
      disabled={disabled}
      onPress={onPress}
    />
  );
};

export default ModalAddButton;
