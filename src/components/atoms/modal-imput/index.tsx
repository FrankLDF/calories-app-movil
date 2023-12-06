import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input} from '@rneui/themed';

interface TextInputWithLegendProps {
  value: string;
  onChangeText: (text: string) => void;
  legend: string;
}

const ModalInput: React.FC<TextInputWithLegendProps> = ({
  value,
  onChangeText,
  legend,
}) => {
  return (
    <View style={styles.formItem}>
      <View style={styles.inputContainer}>
        <Input value={value} onChangeText={onChangeText} />
      </View>
      <View style={styles.legendContainer}>
        <Text style={styles.legend}>{legend}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 2,
  },
  legendContainer: {
    flex: 1,
  },
  legend: {
    fontWeight: '500',
  },
});

export default ModalInput;
