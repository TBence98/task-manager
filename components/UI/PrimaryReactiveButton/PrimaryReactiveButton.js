import { Pressable, View, Text } from "react-native";

const PrimaryReactiveButton = ({ isActive, children, onPress, style }) => {
    return (
        <View className={`mx-1 rounded-md overflow-hidden ${style}`}>
            <Pressable onPress={onPress}>
                <View
                    className={`rounded p-4 bg-white ${
                        isActive ? "bg-blue-600" : ""
                    }`}
                >
                    <Text
                        className={`text-blue-600 text-center ${
                            isActive ? "text-white" : ""
                        }`}
                    >
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
};

export default PrimaryReactiveButton;
