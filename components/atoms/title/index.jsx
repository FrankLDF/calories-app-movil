import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Title({ name, style }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, style]}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
});