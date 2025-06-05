

import React from "react";
import { TextInput, View, Text } from "react-native";
import { styles, colors } from '../theme/styles';

const CustomInput = ({
    label,
    value,
    onChange,
    placeholder,
    keyboardType = 'default',
    autoCapitalize = 'sentences',
    errorMessage = '',
}) => {
    return (
        <View style={styles.inputContainer}> 
            {label && <Text style={styles.label}>{label}</Text>} {/* Corregido {label} */}
            
            <TextInput
                style={[
                    styles.input,
                    errorMessage ? styles.inputError : null
                ]}
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
                placeholderTextColor={colors.placeholder} 
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
            />
            {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
        </View>
    );
};

export default CustomInput;

