import { View, Text, StyleSheet } from "react-native";

const Personal = () => {
    return (
        <View style={styles.screen}>
            <Text>Personal Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Personal;
