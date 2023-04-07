import { View, StyleSheet, Text } from "react-native";
import Colors from "../../../constants/Colors";

function ErrorOverlay({ message }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>An error occurred!</Text>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: Colors.primary800,
    },
    text: {
        color: Colors.secondary500,
        textAlign: "center",
        marginBottom: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default ErrorOverlay;
