import { View, ActivityIndicator, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

function LoadingOverlay() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={Colors.secondary500} />
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
});

export default LoadingOverlay;
