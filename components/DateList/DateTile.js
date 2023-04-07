import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const DateTile = ({ dayName, date, isActive }) => {
    return (
        <View
            style={[
                styles.tileContainer,
                isActive && styles.activeTileContainer,
            ]}
        >
            <Text style={[styles.tileText, isActive && styles.activeTileText]}>
                {dayName}
            </Text>
            <Text
                style={[
                    styles.tileText,
                    styles.dateText,
                    isActive && styles.activeTileText,
                ]}
            >
                {date}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    tileContainer: {
        backgroundColor: "#dae3e6",
        paddingVertical: 8,
        minWidth: 50,
        marginHorizontal: 6,
        borderRadius: 10,
    },
    activeTileContainer: {
        backgroundColor: Colors.secondary400,
        paddingVertical: 12,
        minWidth: 60,
    },
    tileText: {
        color: Colors.secondary400,
        textAlign: "center",
    },
    dateText: {
        fontWeight: "bold",
    },
    activeTileText: {
        color: Colors.primary900,
    },
});

export default DateTile;
