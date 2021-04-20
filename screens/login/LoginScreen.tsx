import React, { useRef, useState } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import StyledButton from "../../components/StyledButton";

import { globalStyles } from "../../styles/GlobalStyles";

const Login = (props: any) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const passwordTextInput = useRef(null)

  //Ogolnie tutaj miało być overridowanie przycisku wstecz na Androidzie
  //Ale nie wiem czemu przekierowuje do Login zamiast Home xD
  // useFocusEffect(
  //     React.useCallback(() => {

  //         BackHandler.addEventListener('hardwareBackPress', () => props.navigation.replace('Home'));

  //         return () =>
  //             BackHandler.removeEventListener('hardwareBackPress', () => props.navigation.replace('Home'));
  //     }, [])
  // );

  const onLoginPress = () => {
    console.log(username);
    console.log(password);
  }

  return (
    <View style={globalStyles.container}>
      <Image
        source={require('../../assets/images/mushrooms.png')}
        style={globalStyles.logo}
      />
      <Text style={globalStyles.title}>Login</Text>
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
            onPress={() => onLoginPress()}
            text="Login"
            touchStyle={{ backgroundColor: "#6aaaaf" }}
          />
        </View>
      </View>
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

export default Login

AppRegistry.registerComponent("Login", () => Login);