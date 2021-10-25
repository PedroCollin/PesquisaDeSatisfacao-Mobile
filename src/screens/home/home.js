import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

function Home ({navigation}) {
    return (
    <View style={styles.container}>

        

      <View style={styles.rect}></View>
      <Text style={styles.loremIpsum}>
          Bem vindo a Pesquisa {"\n"}de satisfação
        </Text>
        <Text style={styles.loremIpsum2}>Dê seu feedback sobre o colégio
        </Text>
      <Image
          source={require("../../../assets/images/modelo.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>

      <TouchableOpacity style={styles.group} 
      onPress={() => navigation.navigate('Form')}>
      
        <Text style={styles.acessarFormulario}>Acessar Formulário</Text>
      </TouchableOpacity>

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: '100%',
        overflow: 'hidden',
        backgroundColor: "rgba(194,42,31,1)"
      },
      rect: {
        width: '2220px',
        height: '100%',
        backgroundColor: "rgba(255,255,255,1)",
        transform: [
          {
            rotate: "-27.00deg"
          }
        ],
        marginTop: 750,             
        marginLeft: -735,
        position: "absolute",
      },
      image: {
        bottom: '-10%',
        right: '10%',
        maxWidth: 432,
        maxHeight: 538,
        minWidth: 200,
        minHeight: 400,
        position: "absolute",
      },
      loremIpsum: {
        color: "rgba(255,255,255,1)",
        fontSize: 29,
        marginTop: 120,

        marginLeft: 22
      },
      loremIpsum2: {
        color: "rgba(183,183,183,1)",
        fontSize: 16,
        marginTop: 16,
    
        marginLeft: 22
      },
      group: {
        width: 238,
        height: 64,
        borderWidth: 3,
        borderColor: "rgba(255,255,255,1)",
        borderRadius: 15,
        marginTop: 109,
        marginLeft: 22,
        alignItems: "center",
      },
      acessarFormulario: {
        color: "rgba(255,255,255,1)",
        fontSize: 23,
        marginTop: 15,

        alignItems: "center",
      }

  });
 
export default Home;