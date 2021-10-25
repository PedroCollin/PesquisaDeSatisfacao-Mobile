import * as React from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { RectButtonProps } from 'react-native-gesture-handler';
import Formulario from '../../components/formulario';
import styles from './styles';
import Icon from "react-native-vector-icons/Entypo";

function Form ({navigation}) {
    return (
        <View>
            <View style={styles.container}>
            <View style={styles.rectStack}>
            <View style={styles.rect}></View>
                 <Image
                     source={require("../../../assets/images/senailogo.png")}
                    resizeMode="contain"
                    style={styles.image}
                ></Image>
            </View>
            <Formulario title=" 2. Disponibilidade de equipamentos, máquinas e ferramentas para a realização do curso " />

                <View style={styles.container1}>
                    <TouchableOpacity style={styles.buttom1} 
                    onPress={() => navigation.navigate('Form')}>
                        <Icon name="chevron-small-left" style={styles.icon}></Icon>
                    </TouchableOpacity>
        
                    <TouchableOpacity style={styles.buttom2} 
                    onPress={() => navigation.navigate('Form3')}>
                        <Icon name="chevron-small-right" style={styles.icon}></Icon>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
   
    );
}

export default Form;