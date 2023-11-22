import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Avatar() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.mkt.lu/cont/2510000/350/1024/emprendedor-empresario-negocios-trabajador-empleado-art.jpg",
        }}
        style={styles.avatar}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 24,
  },
});
