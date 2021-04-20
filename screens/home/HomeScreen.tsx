import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { RootStackParamList } from "../../types";
import { Image } from 'react-native-elements';
import { globalStyles } from '../../styles/GlobalStyles'
import StyledButton from "../../components/StyledButton";

const HomeScreen = ({
    navigation,
}: StackScreenProps<RootStackParamList, 'Home'>) => {
    return (
        <View style={globalStyles.container}>
            <Image
                source={require('../../assets/images/mushrooms.png')}
                style={globalStyles.logo}
            />
            <Text style={globalStyles.title}>Shrooms AI</Text>
            <Text style={styles.subtitle}>Have you ever eaten "wrong" mushrooms?</Text>
            <Text style={styles.subtitle}>It won't happen to you again!</Text>

            <View style={styles.buttonsView}>
                <View style={styles.button}>
                    <StyledButton onPress={() => navigation.replace('Register')} text="Register" />
                </View>

                <View style={styles.button}>
                    <StyledButton onPress={() => navigation.replace('Login')} text="Login" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default HomeScreen
