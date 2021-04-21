import React from 'react'
import { ColorValue, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/GlobalStyles'

interface StyledButtonProps {
    onPress: Function,
    text: string,
    textStyle?: any,
    touchStyle?: any,
    disabled?: boolean,
}

const StyledButton = ({ onPress, text, textStyle, touchStyle, disabled }: StyledButtonProps) => {
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={[globalStyles.buttonTouch, touchStyle]}
            disabled={disabled}
        >
            <Text
                style={[globalStyles.buttonText, textStyle]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default StyledButton
