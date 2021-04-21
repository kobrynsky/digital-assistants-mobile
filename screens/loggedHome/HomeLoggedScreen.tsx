import React from "react";
import { StyleSheet, View, Text } from "react-native"
import { StackScreenProps } from "@react-navigation/stack";
import { Image, Icon } from 'react-native-elements';

import { useDispatch, useSelector } from "react-redux";

import { RootStackParamList } from "../../types";
import { logout } from "../../state/auth/auth.slice";

import { globalStyles } from '../../styles/GlobalStyles'
import MushroomImagePicker from "./components/MushroomImagePicker";
import { RootState } from "../../state/root.reducer";
import { checkShroom } from "../../state/shrooms/shrooms.thunk";
import { StatusType } from "../../state/_utils/statusType";
import LoadingScreen from "../../components/LoadingScreen";

const { LOADING } = StatusType

const HomeLoggedScreen = ({
    navigation,
}: StackScreenProps<RootStackParamList, 'Home'>) => {
    const dispatch = useDispatch()

    const imageUrl = useSelector((state: RootState) => state.shrooms.imageUrl)
    const checkShroomStatus = useSelector((state: RootState) => state.shrooms.status.checkShroom)


    const onLogoutClick = () => {
        dispatch(logout())
        navigation.replace('Home')
    }

    const onCheckShroomClick = () => {
        dispatch(checkShroom(imageUrl))
    }

    return (
        <>
            {checkShroomStatus === LOADING
                ?
                <LoadingScreen />
                :
                <View style={styles.container}>
                    <View style={styles.logoutView}>
                        <Icon
                            raised
                            name='logout'
                            backgroundColor="#16a085"
                            size={18}
                            onPress={() => onLogoutClick()} />
                    </View>
                    <Image
                        source={require('../../assets/images/mushrooms.png')}
                        style={[globalStyles.logo, styles.logo]}
                    />
                    <Text style={[globalStyles.title, styles.title]}>Shrooms AI</Text>
                    <MushroomImagePicker checkShroom={onCheckShroomClick} />
                </View>
            }
        </>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 50,
        height: 50,
        margin: 0,
    },
    title: {
        fontSize: 20,
        marginTop: 0,
        marginBottom: 0,
    },
    logoutView: {
        marginTop: 30,
        marginLeft: 15,
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },
    container: {
        flex: 1,
        backgroundColor: "#16a085",
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});

export default HomeLoggedScreen
