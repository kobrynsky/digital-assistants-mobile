import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native"
import navigation from "../../navigation";
import { RootStackParamList } from "../../types";
import { Avatar, Text } from '@ui-kitten/components';

const HomeScreen = ({
    navigation,
}: StackScreenProps<RootStackParamList, 'Home'>) => {
    return (
        <View style={styles.container}>
            <Avatar style={styles.avatar} size='giant' source={require('../../assets/images/mushrooms.png')} />
            <Text style={styles.title}>Shrooms AI</Text>
            <Text status='basic' style={styles.subtitle}>Have you ever eaten "wrong" mushrooms?</Text>
            <Text status='basic' style={styles.subtitle}>It won't happen to you again!</Text>

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
    avatar: {
        width: 120,
        height: 120
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontFamily: "space-mono",
        marginTop: 15,
        marginBottom: 15,
        fontSize: 35,
        // fontWeight: 'bold',
    },
    subtitle: {
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
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 19,
        color: '#2e78b7',
    },
});

export default HomeScreen
