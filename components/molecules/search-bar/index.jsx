import React from "react";
import { StyleSheet, View } from 'react-native';
import SearchButton from "../../atoms/search-button";
import SearchInput from "../../atoms/search-input";

export default function SearchBar({ handleSearchPress, value, onChangeText }) {
  return (
    <View style={styles.container}>
   <SearchInput value={value} onChangeText={onChangeText} />
      <SearchButton onPress={handleSearchPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
