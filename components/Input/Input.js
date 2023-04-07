import { StyleSheet, Text, TextInput, View } from "react-native";

import Colors from "../../constants/Colors";

function Input({ label, invalid, style, textInputConfig }) {
    const inputStyles = [styles.input];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline);
    }

    if (invalid) {
        inputStyles.push(styles.invalidInput);
    }

    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.label, invalid && styles.invalidLabel]}>
                {label}
            </Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        color: Colors.secondary400,
        marginBottom: 4,
    },
    input: {
        backgroundColor: Colors.primary900,
        padding: 6,
        borderRadius: 6,
        fontSize: 14,
    },
    inputMultiline: {
        minHeight: 150,
        textAlignVertical: "top",
        paddingVertical: 30,
        paddingHorizontal: 10,
        fontSize: 14,
    },
    invalidLabel: {
        color: "red",
    },
    invalidInput: {
        backgroundColor: "red",
    },
});

export default Input;
