import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const SecondaryReactiveButton = ({ isActive, children, onPress, style }) => {
    return (
        <View style={[styles.outerContainer, style]}>
            <Pressable onPress={onPress}>
                <View style={styles.button}>
                    <Text
                        style={[
                            styles.buttonText,
                            isActive && styles.buttonTextActive,
                        ]}
                    >
                        {children}
                    </Text>
                    {isActive ? <View style={styles.decorLine}></View> : null}
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
        paddingHorizontal: 16,
        minHeight: 30,
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },
    buttonTextActive: {
        color: Colors.secondary500,
    },
    decorLine: {
        width: 20,
        height: 3,
        backgroundColor: Colors.secondary500,
        marginTop: 4,
        marginLeft: "auto",
        marginRight: "auto",
    },
});

export default SecondaryReactiveButton;
