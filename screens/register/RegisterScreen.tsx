import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    KeyboardAvoidingView,
    ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import StyledButton from "../../components/StyledButton";
import { register } from "../../state/auth/auth.thunk";
import { RootState } from "../../state/root.reducer"
import { StatusType } from "../../state/_utils/statusType";

import { globalStyles } from "../../styles/GlobalStyles";

const Register = (props: any) => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const buttonDisabled = username.length <= 0 && password.length <= 0

    const registerStatus = useSelector((state: RootState) => state.auth.status.register)

    const passwordTextInput = useRef(null)

    useEffect(() => {
        if (registerStatus == StatusType.FAILED)
            alert("User with this name already exists")
    }, [registerStatus])

    const onRegisterPress = () => {
        const onSuccess = () => {
            props.navigation.replace('Login')
        }

        dispatch(register({ username, password }, onSuccess))
    }

    return (
        <View style={globalStyles.container}>
            <Image
                source={require('../../assets/images/mushrooms.png')}
                style={globalStyles.logo}
            />
            <Text style={globalStyles.title}>Register</Text>
            {registerStatus === StatusType.LOADING ?
                <ActivityIndicator size="large" color="rgba(0,0,0,0.5)" />
                :
                <>
                    <KeyboardAvoidingView behavior="position">
                        <TextInput
                            value={username}
                            onChangeText={name => setUsername(name)}
                            style={globalStyles.input}
                            placeholder="Username"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            returnKeyType="next"
                            onSubmitEditing={() => passwordTextInput.current.focus()}
                        />
                        <TextInput
                            ref={passwordTextInput}
                            value={password}
                            onChangeText={pass => setPassword(pass)}
                            style={globalStyles.input}
                            placeholder="Password"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            returnKeyType="next"
                            secureTextEntry
                        />
                    </KeyboardAvoidingView>
                    <View style={styles.buttonsView}>
                        <View style={styles.button}>
                            <StyledButton onPress={() => props.navigation.replace('Home')} text="Home" />
                        </View>

                        <View style={styles.button}>
                            <StyledButton
                                onPress={() => onRegisterPress()}
                                disabled={buttonDisabled}
                                text="Register"
                                touchStyle={{ backgroundColor: "#6aaaaf" }}
                            />
                        </View>
                    </View>
                </>
            }
        </View>
    );
}


const styles = StyleSheet.create({
    buttonsView: {
        flexDirection: 'row'
    },
    button: {
        margin: 15,
    },
});

export default Register

AppRegistry.registerComponent("Register", () => Register);