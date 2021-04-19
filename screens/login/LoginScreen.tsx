import React from "react";
import { StackScreenProps } from '@react-navigation/stack';
import { Text } from "../../components/Themed";
import { RootStackParamList } from "../../types";
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'Login'>) => {
  return (
    <>
      <TouchableOpacity style={{ margin: 50 }} onPress={() => navigation.replace('Home')}>
        <Text>Home page</Text>
      </TouchableOpacity>
    </>
  )
};

export default LoginScreen
