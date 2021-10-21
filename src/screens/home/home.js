import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

function Home ({navigation}) {
    return (
    <View style={styles.container}>
      <View style={styles.rect}></View>
      <Image
          source={require("../../../assets/images/modelo.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: '100%',
        overflow: 'hidden',
      },
      rect: {
        width: '2220px',
        height: '100%',
        backgroundColor: "rgba(194,42,31,1)",
        transform: [
          {
            rotate: "-27.00deg"
          }
        ],
        marginTop: 677,             
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

  });
 
export default Home;