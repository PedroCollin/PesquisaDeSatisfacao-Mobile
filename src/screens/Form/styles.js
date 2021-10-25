import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    rect: {
      top: 21,
      alignSelf: "center",
      textAlign: "center",
      alignItems: "center",
      width: '100%',
      height: 100,
      position: "absolute",
      backgroundColor: "rgba(194,42,31,1)",
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        height: 0,
        width: 0
      },

      elevation: 75,
      shadowOpacity: 1,
      shadowRadius: 25
    },
    image: {
      alignSelf: "center",
      textAlign: "center",
      alignItems: "center",
      marginTop: -26,
      width: 200,
      height: 200,
      position: "absolute"
    },
    rectStack: {
      width: '100%',
      height: 170,
      marginTop: -21,
      alignSelf: "center",
      textAlign: "center",
      alignItems: "center",
    },
    buttom: {
      width: 66,
      height: 66,
      backgroundColor: "rgba(194,42,31,1)",
      borderRadius: 20,
      
      alignSelf: "center",
      textAlign: "center",
      alignItems: "center",

    },
    buttom1: {
      width: 66,
      height: 66,
      backgroundColor: "rgba(194,42,31,1)",
      borderRadius: 20,
      
    
      textAlign: "center",
      alignItems: "center",

    },
    buttom2: {
      width: 66,
      height: 66,
      backgroundColor: "rgba(194,42,31,1)",
      borderRadius: 20,
            
 

      textAlign: "center",
      alignItems: "center",

    },
  icon: {
      color: "rgba(255,255,255,1)",
      fontSize: 50,
      height: 54,
      width: 50,
      marginTop: 6,
      alignSelf: "center",
      textAlign: "center",
      alignItems: "center",
    },
    icon1Stack: {
      width: 66,
      height: 66
    },

    container1:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign: "center",
      alignItems: "center",
      paddingLeft: 80,
      paddingRight: 80,
      marginTop: 20,
    }
    

  });

  export default styles;