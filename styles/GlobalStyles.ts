import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    logo: {
        width: 120,
        height: 120,
        margin: 30,
        resizeMode: 'contain'
    },
    title: {
        fontFamily: "space-mono",
        color: "white",
        marginTop: 15,
        marginBottom: 15,
        fontSize: 35,
    },
    container: {
        flex: 1,
        backgroundColor: "#16a085",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    buttonTouch: {
        marginTop: 15,
        padding: 15,
        backgroundColor: "#66af8f",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "white",
    },
    buttonText: {
        textAlign: "center",
        fontSize: 19,
        color: 'white',
    },
    input: {
        fontSize: 17,
        height: 40,
        width: 250,
        marginBottom: 10,
        backgroundColor: "rgba(255,255,255,0.5)",
        color: "#fff",
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "white",
    },
    loading: {
        backgroundColor: "#16a085",
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})