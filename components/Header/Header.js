import { View, Text, StyleSheet } from "react-native";
import HeaderBackButton from "../UI/HeaderBackButton/HeaderBackButton";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";

const Header = ({ navigationTarget, title }) => {
    const navigation = useNavigation();

    function goBackHandler() {
        navigation.navigate(navigationTarget);
    }

    return (
        <View style={styles.headerContainer}>
            <View
                style={{
                    position: "relative",
                    width: "100%",
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 14,
                        zIndex: 10,
                        elevation: 10,
                    }}
                >
                    <HeaderBackButton onPress={goBackHandler} />
                </View>
                <View
                    style={{
                        position: "absolute",
                        top: 6,
                        width: "100%",
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            color: Colors.primary900,
                            fontSize: 20,
                            fontWeight: "bold",
                        }}
                    >
                        {title}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Colors.secondary500,
        minHeight: 140,
    },
});

export default Header;
