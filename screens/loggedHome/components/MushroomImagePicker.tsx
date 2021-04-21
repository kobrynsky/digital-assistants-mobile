import React, { useEffect } from 'react';
import { Image, View, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import StyledButton from '../../../components/StyledButton';
import { useDispatch, useSelector } from 'react-redux';
import { setImageUrl } from '../../../state/shrooms/shrooms.slice';
import { RootState } from '../../../state/root.reducer';

export interface MushroomImagePickerProps {
    checkShroom: Function,
}

const MushroomImagePicker = ({ checkShroom }: MushroomImagePickerProps) => {
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

        console.log(result);

        if (!result.cancelled) {
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
                    {imageUrl && <StyledButton onPress={() => checkShroom()} text="Check shroom!" touchStyle={styles.button} />}
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
        marginBottom: 5,
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
    }
})

export default MushroomImagePicker;