import { View, Text, StyleSheet } from "react-native";

const Home = () => {
    return (
        <View style={styles.screen}>
            <Text>Home Screen</Text>
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

export default Home;
