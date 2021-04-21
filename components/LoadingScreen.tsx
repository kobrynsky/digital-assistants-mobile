import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { Image } from 'react-native-elements';
import { globalStyles } from '../styles/GlobalStyles'

const LoadingScreen = () => {
    return (
        <View style={globalStyles.loading}>
            <Image
                source={require('../assets/images/mushrooms.png')}
                style={globalStyles.logo}
            />
            <Text style={globalStyles.title}>Shrooms AI</Text>
            <ActivityIndicator size='large' color="rgba(0,0,0,0.5)" />
        </View>

    )
}

export default LoadingScreen
