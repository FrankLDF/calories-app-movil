import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Icon, Input } from "@rneui/themed";
import React, { FC, useState,useEffect} from "react";
import { Modal,View, StyleSheet, Text} from "react-native";

type AddFoodModalProps = {
    onClose: () => void;
    visible: boolean;
};
const AddFoodModal: FC<AddFoodModalProps> = ({onClose,visible}) => {
    const [calories, setcalories] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [portion, setportion] = useState<string>('');

    useEffect(() => {
        setcalories('');
        setName('');
        setportion('');
    },
    [visible]);

    const handleAddPress = () => {
        onClose();
    };

    return(
        <Modal 
        visible={visible} 
        onRequestClose={onClose} 
        transparent
        animationType="slide"> 
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.closeContainer}></View>
                    <Button icon={<Icon name="close" size={28} />} onPress={onClose}  type="clear"/>
                </View>

                <View style={styles.formItem}>
                    <View style={styles.InputContainer}>
                        <Input value={calories} onChangeText={(text: string) => setcalories(text)}>

                        </Input>
                    </View>
                    <View style={styles.lengedContainer}>
                        <Text style={styles.legend}>CAL</Text>
                    </View>
                </View>

                <View style={styles.formItem}>
                    <View style={styles.InputContainer}>
                        <Input value={name} onChangeText={(text: string) => setName(text)}></Input>
                    </View>
                    <View style={styles.lengedContainer}>
                        <Text style={styles.legend}>Nombre</Text>
                    </View>
                </View>

                <View style={styles.formItem}>
                    <View style={styles.InputContainer}>
                        <Input value={portion} onChangeText={(text: string) => setportion(text)}></Input>
                    </View>
                    <View style={styles.lengedContainer}>
                        <Text style={styles.legend}>Porcion</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Add" icon={<Icon name="add" color="#FFF" />} color="#4ecb71" radius="lg" 
                    disabled={calories.trim() === '' || name.trim() === '' || portion.trim() === '' } 
                    onPress={handleAddPress}/>
                </View>
            </View>
        </Modal>
    );
};  

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    content:{
        width: '75%',
        backgroundColor: "#FFF",
        padding:18,
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
    closeContainer:{
        alignItems: 'flex-end'
    },
    formItem:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    InputContainer:{
        flex:2,
    },
    lengedContainer:{
        flex:1,
    },
    legend:{
        fontWeight: '500',
    },
    buttonContainer:{
        alignItems:'flex-end',
    }
});

export default AddFoodModal;