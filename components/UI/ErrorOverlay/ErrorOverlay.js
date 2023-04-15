import { View, Text } from "react-native";

function ErrorOverlay({ message }) {
    return (
        <View className="flex-1 justify-center items-center p-6 bg-slate-100">
            <Text className="text-blue-600 text-center mb-2 text-xl font-bold">
                An error occurred!
            </Text>
            <Text className="text-blue-600 text-center mb-2">{message}</Text>
        </View>
    );
}

export default ErrorOverlay;
