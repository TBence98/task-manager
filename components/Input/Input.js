import { Text, TextInput, View } from "react-native";

function Input({ label, invalid, style, textInputConfig }) {
    let inputStyles = "bg-white p-1.5 rounded text-sm";

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles += " min-h-[150px] py-8 px-2.5 textAlignVertical-top";
    }

    if (invalid) {
        inputStyles += " bg-red-300";
    }

    return (
        <View className={`mx-1 my-2 ${style}`}>
            <Text
                className={`text-sm font-bold text-blue-600 mb-1 ${
                    invalid ? "text-red-600" : ""
                }`}
            >
                {label}
            </Text>
            <TextInput className={inputStyles} {...textInputConfig} />
        </View>
    );
}

export default Input;
