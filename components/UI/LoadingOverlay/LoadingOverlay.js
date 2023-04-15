import { View, ActivityIndicator } from "react-native";
import Colors from "../../../constants/Colors";

function LoadingOverlay() {
    return (
        <View className="flex-1 justify-center items-center p-6 bg-slate-100">
            <ActivityIndicator size="large" color={Colors.secondary500} />
        </View>
    );
}

export default LoadingOverlay;
