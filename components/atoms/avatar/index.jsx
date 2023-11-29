import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Avatar() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/126710550?v=4' }}
        style={styles.avatar}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  avatar:{
    width: 45, 
    height: 45,
    borderRadius: 24,

  }
})