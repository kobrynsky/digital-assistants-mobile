import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View, Text } from "react-native"
import { RootStackParamList } from "../../types";
import { Image } from 'react-native-elements';
import { globalStyles } from '../../styles/GlobalStyles'
import StyledButton from "../../components/StyledButton";
import { useDispatch } from "react-redux";
import { logout } from "../../state/auth/auth.slice";

const HomeLoggedScreen = ({
    navigation,
}: StackScreenProps<RootStackParamList, 'Home'>) => {
    const dispatch = useDispatch()

    const onLogoutClick = () => {
        dispatch(logout())
        navigation.replace('Home')
    }


    return (
        <View style={globalStyles.container}>
            <Image
                source={require('../../assets/images/mushrooms.png')}
                style={globalStyles.logo}
            />
            <Text style={globalStyles.title}>Shrooms AI</Text>
            <Text style={styles.subtitle}>Hi there, you are logged</Text>
            <Text style={styles.subtitle}>What u want to do?</Text>

            <View style={styles.buttonsView}>
                <View style={styles.button}>
                    <StyledButton onPress={() => onLogoutClick()} text="Logout" />
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

export default HomeLoggedScreen
