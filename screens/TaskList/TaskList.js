import { View, Text, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
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
            <View className="flex-1 bg-slate-100 px-4">
                <View className="mt-16 flex-row justify-between items-center">
                    <Pressable onPress={() => setShowCalendar(true)}>
                        <Text className="text-3xl font-bold">
                            {selectedMonth}, {selectedYear}
                        </Text>
                    </Pressable>
                    <PrimaryButton
                        onPress={addTaskHandler}
                        innerContainerStyle="py-1.5 pl-2.5"
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
                <View className="my-10">
                    <DateList
                        days={daysOfMonth}
                        activeDate={selectedDate.getDate()}
                    />
                </View>
                <View className="h-3/5">
                    <ListOfTask />
                </View>
            </View>
        </>
    );
};

export default TaskList;
