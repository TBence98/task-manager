import { View, Pressable } from "react-native";
import Colors from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const HeaderBackButton = ({ onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <View className="p-1.5 rounded-lg bg-white items-center justify-center">
                <Ionicons
                    name="arrow-back"
                    size={24}
                    color={Colors.secondary500}
                />
            </View>
        </Pressable>
    );
};

export default HeaderBackButton;
