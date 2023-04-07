import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const TaskListItem = ({ isActive, name }) => {
    return (
        <View style={styles.card}>
            <Text
                style={[styles.cardTitle, isActive && styles.activeCardTitle]}
            >
                {name}
            </Text>
            <View style={styles.circle}>
                {isActive ? <View style={styles.filledCircle}></View> : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 10,
        marginVertical: 3,
        backgroundColor: Colors.primary900,
        borderRadius: 5,
        borderColor: "#dae4e6",
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    cardTitle: {
        fontWeight: "bold",
    },
    activeCardTitle: {
        color: Colors.secondary500,
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: Colors.secondary400,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    filledCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: Colors.secondary400,
    },
});

export default TaskListItem;
