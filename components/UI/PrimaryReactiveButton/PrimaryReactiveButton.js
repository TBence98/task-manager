import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const PrimaryReactiveButton = ({ isActive, children, onPress, style }) => {
    return (
        <View style={[styles.outerContainer, style]}>
            <Pressable onPress={onPress}>
                <View style={[styles.button, isActive && styles.buttonActive]}>
                    <Text
                        style={[
                            styles.buttonText,
                            isActive && styles.buttonTextActive,
                        ]}
                    >
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        marginHorizontal: 4,
        borderRadius: 10,
        overflow: "hidden",
    },
    button: {
        borderRadius: 4,
        padding: 16,
        backgroundColor: Colors.primary900,
    },
    buttonActive: {
        backgroundColor: Colors.secondary500,
    },
    buttonText: {
        color: Colors.secondary500,
        textAlign: "center",
    },
    buttonTextActive: {
        color: Colors.primary900,
    },
});

export default PrimaryReactiveButton;
