import React, { Component, useState } from "react";
import { StyleSheet, View, TouchableOpacity , Text, Button, Image, TextInput } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import firebase from '../../../firebaseConfig'

function Cadastro ({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error , setError] = useState('');
    
    const signUp = async() => {
      try {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        navigation.navigate('Home')
      } catch (error) {
        setError(error.message);
      }
    }

  return (
    <View style={styles.container}>
    <View style={styles.ellipseStack}>
    <View style={styles.forma}></View>;
      <TouchableOpacity 
        onPress={() => signUp()}
        style={styles.button}>
        <Text style={styles.txtButton}>Cadastrar</Text>
      </TouchableOpacity>
      <Image
          source={require("../../../assets/images/senailogo.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.cadastro}>Cadastro</Text>
        <View style={styles.rect}></View>
        {/* CAMPO NOME */}
          <View style={styles.campo1}>
            <View style={styles.iconRow}>
              <Icon name="user" style={styles.icon}></Icon>
              <View style={styles.inputStack}>
                <TextInput
                  placeholder="Nome"
                  placeholderTextColor="rgba(142,133,133,1)"
                  style={styles.input}
                ></TextInput>
                <Text style={styles.nome}>Nome</Text>
              </View>
            </View>
            <View style={styles.linha}></View>
          </View>
        {/* CAMPO EMAIL */}
          <View style={styles.campo2}>
            <View style={styles.iconRow}>
              <Icon name="mail" style={styles.iconE}></Icon>
              <View style={styles.inputStack}>
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="rgba(142,133,133,1)"
                  secureTextEntry={false}
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                ></TextInput>
                <Text style={styles.nome}>Email</Text>
              </View>
            </View>
            <View style={styles.linha}></View>
          </View>
        {/* CAMPO SENHA */}
        <View style={styles.campo3}>
            <View style={styles.iconRow}>
              <MaterialCommunityIconsIcon name="lock-outline" style={styles.icon}></MaterialCommunityIconsIcon>
              <View style={styles.inputStack}>
                <TextInput
                  placeholder="Digite Sua Senha"
                  placeholderTextColor="rgba(142,133,133,1)"
                  secureTextEntry={true}
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                ></TextInput>
                <Text style={styles.nome}>Senha</Text>
              </View>
            </View>
            <View style={styles.linha}></View>
          </View>
        {/* CAMPO SENHA2 */}
        <View style={styles.campo4}>
            <View style={styles.iconRow}>
            <MaterialCommunityIconsIcon name="lock-outline" style={styles.icon}></MaterialCommunityIconsIcon>
              <View style={styles.inputStack}>
                <TextInput
                  placeholder="Confirme Sua Senha"
                  placeholderTextColor="rgba(142,133,133,1)"
                  style={styles.input}
                  secureTextEntry={true}
                ></TextInput>
                <Text style={styles.nome}>Confirme Sua Senha</Text>
              </View>
              {error?
              <text style={{color: 'red'}}>{error}</text>
              :null}
            </View>
            <View style={styles.linha}></View>
          </View>
      </View>
      <View style={styles.jaTemConta}>
        <View style={styles.jaTemUmaContaRow}>
          <Text style={styles.jaTemUmaConta}>Ja tem uma conta?</Text>
          <View style={styles.loginStack}>
            <Text style={styles.login}>Login</Text>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => navigation.navigate("Login")}
            ></TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ellipse: {
    top: 0,
    width: 1176,
    height: 744,
    position: "absolute",
    left: 0
  },
  forma: {
    backgroundColor: "rgba(194,42,31,1)",
    borderBottomRightRadius: 130,
    borderBottomLeftRadius: 130,
    width: '100%',
    height: '97%'
  },
  txtButton: {
    color: 'white',
    fontSize:20,
    fontWeight: 'bold'
  },
  button: {
    top: 719,
    width: 168,
    height: 51,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 35,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  ellipseStack: {
    width: '100%',
    height: 770,
    marginTop: -152,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  jaTemUmaConta: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  login: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(251,92,92,1)",
    width: 35,
    height: 17
  },
  jaTemUmaContaRow: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  loginStack: {
    width: 35,
    height: 17,
    marginLeft: 4
  },
  button2: {
    top: 0,
    left: 0,
    width: 35,
    height: 17,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  jaTemConta: {
    width: 158,
    height: 17,
    flexDirection: "row",
    marginTop: 38,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  image: {
    top: 152,
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center",
    width: 162,
    height: 162,
    position: "absolute"
  },
  cadastro: {
    top: 299,
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
    marginRight: 165,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  rect: {
    top: 329,
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
    marginRight: 180,
    width: 72,
    height: 3,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  campo1: {
    top: 372,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 261,
    height: 41,
    position: "absolute"
  },
  campo2: {
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 261,
    height: 41,
    position: "absolute"
  },
  campo3: {
    marginTop: 300,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 261,
    height: 41,
    position: "absolute"
  },
  campo4: {
    marginTop: 450,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 261,
    height: 41,
    position: "absolute"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 35
  },
  iconE:{
    color: "rgba(255,255,255,1)",
    fontSize: 30
  },
  input: {
    top: 6,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#fff",
    height: 31,
    width: 224
  },
  nome: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 9
  },
  inputStack: {
    width: 224,
    height: 37,
    marginLeft: 3,
    marginTop: 1
  },
  iconRow: {
    height: 38,
    flexDirection: "row",
    marginRight: -1
  },
  linha: {
    width: 224,
    height: 3,
    backgroundColor: "#E6E6E6",
    marginLeft: 38
  },
});

export default Cadastro;