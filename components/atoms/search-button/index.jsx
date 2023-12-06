import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

export default function SearchButton({ onPress }) {
  return (
    <View>
      <Button
        title="Search"
        onPress={onPress}  
        titleStyle={styles.title}
        radius="lg"
        color={'#ade8af'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#000',
    justifyContent: 'center',
    fontSize: 15,
  },
});
