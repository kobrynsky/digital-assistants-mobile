import React, { useEffect } from 'react';
import { Image, View, Platform, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import StyledButton from '../../../components/StyledButton';
import { useDispatch, useSelector } from 'react-redux';
import { clearShroomsState, setImageUrl } from '../../../state/shrooms/shrooms.slice';
import { RootState } from '../../../state/root.reducer';
import { StatusType } from '../../../state/_utils/statusType';

export interface MushroomImagePickerProps {
    checkShroom: Function,
    checkShroomStatus: StatusType,
    predictedClass: string,
    percentageProbability: number,
}

const MushroomImagePicker = ({ checkShroom, checkShroomStatus, predictedClass, percentageProbability }: MushroomImagePickerProps) => {
    const dispatch = useDispatch()

    const imageUrl = useSelector((state: RootState) => state.shrooms.imageUrl)

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            dispatch(clearShroomsState())
            dispatch(setImageUrl(result.uri));
        }
    };

    return (
        <View style={styles.view}>
            <View style={styles.view__buttonsView}>
                <View style={styles.view__buttonsView__button}>
                    <StyledButton onPress={() => pickImage()} text="Pick image" touchStyle={styles.button} />
                </View>
            </View>

            <View style={styles.view__imageView}>
                <View>
                    {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
                </View>
                <View>
                    {imageUrl && !(checkShroomStatus === StatusType.SUCCESS) && <StyledButton onPress={() => checkShroom()} text="Check shroom!" touchStyle={styles.button} />}
                </View>
                <View style={styles.view__predictView}>
                    {checkShroomStatus === StatusType.SUCCESS &&
                        <>
                            <Text style={styles.view__predictView__text_hmm}>Hmmm... It is probably</Text>
                            <Text style={styles.view__predictView__text_predictedClass}>{predictedClass}!</Text>
                            <Text style={styles.view__predictView__text}>(for like {percentageProbability.toFixed(0)}%)</Text>
                        </>
                    }
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 2,
        marginTop: 5,
        marginBottom: 10,
    },
    view__imageView: {
        flex: 1,
        alignContent: 'flex-end'
    },
    view__buttonsView: {
        flexDirection: 'row',
    },
    view__buttonsView__button: {
        margin: 5
    },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    button: {
        marginTop: 5,
        marginBottom: 5,
    },
    view__predictView: {
        alignItems: 'center',
    },
    view__predictView__text: {
        color: "white",
        fontSize: 13,
    },
    view__predictView__text_hmm: {
        color: "white",
        fontSize: 20,
    },
    view__predictView__text_predictedClass: {
        color: "white",
        fontSize: 30,
        fontFamily: "space-mono",
        marginBottom: 10,
    },
})

export default MushroomImagePicker;