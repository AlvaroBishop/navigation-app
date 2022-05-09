import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        marginBottom: 10,
    },

    boxContainer: {
        display: 'flex',
        flexWrap: 'wrap'
    },

    box: {
        borderRadius: 10,
        borderWidth: 1,
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor:'#57FCC5',
        margin: 10,
    },

    boxText: {
        color: "darkslategray",
        fontWeight: "bold",
    },

    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'grey',
        position: 'relative',
        bottom: 0,
        top: 110,
        height: 100,
    }
})