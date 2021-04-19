import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "../../components/Themed";
import { RootStackParamList } from "../../types";

const RegisterScreen = ({
    navigation,
}: StackScreenProps<RootStackParamList, 'Register'>) => {
    return (
        <>
            <TouchableOpacity style={{ margin: 50 }} onPress={() => navigation.replace('Home')}>
                <Text>Home page</Text>
            </TouchableOpacity>
        </>
    )
};

export default RegisterScreen
