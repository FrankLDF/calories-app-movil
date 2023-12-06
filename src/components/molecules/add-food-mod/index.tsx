import {Button, Icon} from '@rneui/themed';
import React, {FC, useState, useEffect} from 'react';
import {Modal, View, StyleSheet} from 'react-native';
import useFoodStorage from '../../../hooks/storage-food';
import ModalInput from '../../atoms/modal-imput';

type AddFoodModalProps = {
  onClose: (shouldUpdate?: boolean) => void;
  visible: boolean;
};

const AddFoodModal: FC<AddFoodModalProps> = ({onClose, visible}) => {
  const [calories, setCalories] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [portion, setPortion] = useState<string>('');
  const {onSaveFood} = useFoodStorage();

  useEffect(() => {
    setCalories('');
    setName('');
    setPortion('');
  }, [visible]);

  const handleSubmit = async () => {
    try {
      await onSaveFood({
        calories,
        name,
        portion,
      });
      onClose(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={() => onClose()}
      transparent
      animationType="slide">
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.closeContainer}>
            <Button
              icon={<Icon name="close" size={28} />}
              onPress={() => onClose()}
              type="clear"
            />
          </View>

          <ModalInput
            value={calories}
            onChangeText={(text: string) => setCalories(text)}
            legend="CAL"
          />
          <ModalInput
            value={name}
            onChangeText={(text: string) => setName(text)}
            legend="Name"
          />
          <ModalInput
            value={portion}
            onChangeText={(text: string) => setPortion(text)}
            legend="Portion"
          />
          <View style={styles.btnContainer}>
            <Button
              title="Add"
              icon={<Icon name="add" color="#fff" />}
              radius="lg"
              color="#ade8af"
              onPress={handleSubmit}
              disabled={
                calories.trim() === '' ||
                name.trim() === '' ||
                portion.trim() === ''
              }
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: '75%',
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeContainer: {
    alignItems: 'flex-end',
  },
  btnContainer: {
    alignItems: 'flex-end',
  },
});

export default AddFoodModal;
