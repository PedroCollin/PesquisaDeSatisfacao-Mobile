import React, {Component} from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import Formulario from '../../components/formulario';
import styles from './styles';
import Icon from "react-native-vector-icons/Entypo";
import api from '../../services/api';

export default class Form extends Component{

    constructor(props) {
        super(props);
        this.state = {
            pergunta: []
        };
    }

    async componentDidMount() {
        const response = await api.get('/pergunta');
        this.setState({ pergunta: response.data });
    }

    render () {
        return(
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
            <Formulario title=" 1. Limpeza e conservação da sala de aula e da oficina " />
            <TouchableOpacity style={styles.buttom} 
            onPress={() => this.props.navigation.navigate('Form2')}>
                <Icon name="chevron-small-right" style={styles.icon}></Icon>
             </TouchableOpacity>
            </View>
            
        
        </View>    
        );
    };
}