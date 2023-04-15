import { Pressable, View, Text } from "react-native";

const SecondaryReactiveButton = ({ isActive, children, onPress, style }) => {
    return (
        <View className={`mx-1 rounded-lg ${style}`}>
            <Pressable onPress={onPress}>
                <View className="rounded px-4 min-h-[30px]">
                    <Text
                        className={`font-bold text-base text-center ${
                            isActive ? "text-blue-600" : ""
                        }`}
                    >
                        {children}
                    </Text>
                    {isActive ? (
                        <View className="w-5 h-1 bg-blue-600 mt-1 ml-auto mr-auto"></View>
                    ) : null}
                </View>
            </Pressable>
        </View>
    );
};

export default SecondaryReactiveButton;
