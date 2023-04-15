import { Pressable, View, Text } from "react-native";

const PrimaryButton = ({
    children,
    onPress,
    style,
    innerContainerStyle,
    icon,
}) => {
    return (
        <View className={`mx-1 rounded-md overflow-hidden ${style}`}>
            <Pressable onPress={onPress}>
                <View
                    className={`rounded-md p-4 bg-blue-600 flex-row align-center justify-center ${innerContainerStyle}`}
                >
                    {icon ? <Text>{icon}</Text> : null}
                    <View className="align-center justify-center">
                        <Text className="color-white text-white text-center">
                            {children}
                        </Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;
