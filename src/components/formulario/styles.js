import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
        color: "#222",
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 10,
        textAlign: "center"
    },
    title: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",

    },
    titleP:{
        color: "rgba(194,42,31,1)",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        paddingBottom: 15,
    },
    input:{
        borderWidth: 1,
        borderColor: "#222",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    button:{
        backgroundColor: "#222",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText:{
        color: "#fff",
        fontSize: 17,
        textAlign: "center",
    },
    container:{
        flex: 1,
        padding: 10,
    },
});


export default styles;