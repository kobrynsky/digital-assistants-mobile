import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { RootStackParamList } from "../../types";
import { Image } from 'react-native-elements';

const HomeScreen = ({
    navigation,
}: StackScreenProps<RootStackParamList, 'Home'>) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/mushrooms.png')}
                style={styles.image}
            />
            <Text style={styles.title}>Shrooms AI</Text>
            <Text style={styles.subtitle}>Have you ever eaten "wrong" mushrooms?</Text>
            <Text style={styles.subtitle}>It won't happen to you again!</Text>

            <View style={styles.buttonsView}>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.replace('Register')} style={styles.link}>
                        <Text style={styles.linkText}>Register</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.link}>
                        <Text style={styles.linkText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        margin: 30,
        resizeMode: 'contain'
    },
    container: {
        flex: 1,
        backgroundColor: "#16a085",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontFamily: "space-mono",
        color: "white",
        marginTop: 15,
        marginBottom: 15,
        fontSize: 35,
    },
    subtitle: {
        color: "white",
        marginTop: 15,
    },
    buttonsView: {
        flexDirection: 'row'
    },
    button: {
        margin: 15,
    },
    link: {
        marginTop: 15,
        padding: 15,
        backgroundColor: "#66af8f",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "white",
    },
    linkText: {
        fontSize: 19,
        color: 'white',
    },
});

export default HomeScreen
