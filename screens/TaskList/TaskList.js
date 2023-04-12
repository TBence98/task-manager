import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import getDaysOfMonth from "../../utils/getDaysOfMonth";
import DateList from "../../components/DateList/DateList";
import ListOfTask from "../../components/ListOfTasks/ListOfTask";
import PrimaryButton from "../../components/UI/PrimaryButton/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import DateTimePicker from "@react-native-community/datetimepicker";

const TaskList = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);

    const navigation = useNavigation();

    let daysOfMonth = getDaysOfMonth(
        selectedDate.getFullYear(),
        selectedDate.getMonth()
    );

    const selectedMonth = selectedDate.toLocaleString("en-US", {
        month: "short",
    });
    const selectedYear = selectedDate.getFullYear();

    useEffect(() => {
        daysOfMonth = getDaysOfMonth(
            selectedDate.getFullYear(),
            selectedDate.getMonth()
        );
    }, [selectedDate]);

    function dateChangeHandler({ type }, selectedDate) {
        if (type === "set") {
            setShowCalendar(false);
            setSelectedDate(new Date(selectedDate));
        } else {
            setShowCalendar(false);
        }
    }

    function addTaskHandler() {
        navigation.navigate("AddTask");
    }

    return (
        <>
            <StatusBar style="black" />
            {showCalendar ? (
                <DateTimePicker
                    mode="date"
                    display="default"
                    value={selectedDate}
                    onChange={dateChangeHandler}
                />
            ) : null}
            <View style={styles.screen}>
                <View style={styles.header}>
                    <Pressable onPress={() => setShowCalendar(true)}>
                        <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                            {selectedMonth}, {selectedYear}
                        </Text>
                    </Pressable>
                    <PrimaryButton
                        onPress={addTaskHandler}
                        innerContainerStyle={{
                            paddingVertical: 6,
                            paddingLeft: 10,
                        }}
                        icon={
                            <Ionicons
                                name="add-sharp"
                                color="white"
                                size={24}
                            />
                        }
                    >
                        Add Task
                    </PrimaryButton>
                </View>
                <View style={{ marginVertical: 40 }}>
                    <DateList
                        days={daysOfMonth}
                        activeDate={selectedDate.getDate()}
                    />
                </View>
                <View style={{ height: 500 }}>
                    <ListOfTask />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.primary800,
        flex: 1,
        paddingHorizontal: "6%",
    },
    header: {
        marginTop: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export default TaskList;
