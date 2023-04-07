import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const PrimaryButton = ({
    children,
    onPress,
    style,
    innerContainerStyle,
    icon,
}) => {
    return (
        <View style={[styles.outerContainer, style]}>
            <Pressable onPress={onPress}>
                <View style={[styles.button, innerContainerStyle]}>
                    {icon ? <Text>{icon}</Text> : null}
                    <Text
                        style={[
                            styles.buttonText,
                            { textAlignVertical: "center" },
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
        backgroundColor: Colors.secondary500,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: Colors.primary900,
        textAlign: "center",
    },
});

export default PrimaryButton;
