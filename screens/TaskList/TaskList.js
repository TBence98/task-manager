import { View, Text, Button, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import getDaysOfMonth from "../../utils/getDaysOfMonth";
import DateList from "../../components/DateList/DateList";
import ListOfTask from "../../components/ListOfTasks/ListOfTask";
import PrimaryButton from "../../components/UI/PrimaryButton/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const TaskList = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const navigation = useNavigation();

    let daysOfMonth = getDaysOfMonth(
        selectedDate.getFullYear(),
        selectedDate.getDate()
    );

    useEffect(() => {
        daysOfMonth = getDaysOfMonth(
            selectedDate.getFullYear(),
            selectedDate.getDate()
        );
    }, [selectedDate]);

    function addTaskHandler() {
        navigation.navigate("AddTask");
    }

    return (
        <>
            <StatusBar style="black" />
            <View style={styles.screen}>
                <View style={styles.header}>
                    <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                        Apr, 2023
                    </Text>
                    {/* <Button title="Add Task" onPress={addTaskHandler} /> */}
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
