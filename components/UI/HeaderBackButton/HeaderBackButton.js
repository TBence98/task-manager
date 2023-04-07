import { View, Pressable, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const HeaderBackButton = ({ onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.buttonInnerContainer}>
                <Ionicons
                    name="arrow-back"
                    size={24}
                    color={Colors.secondary500}
                />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    buttonInnerContainer: {
        padding: 6,
        borderRadius: 10,
        backgroundColor: Colors.primary900,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default HeaderBackButton;
