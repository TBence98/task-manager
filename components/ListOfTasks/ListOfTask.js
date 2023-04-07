import { useContext, useState } from "react";
import { TaskContext } from "../../store/TaskContext";
import { Button, View, ScrollView, StyleSheet, Text } from "react-native";
import TaskListItem from "./TaskListItem";
import SecondaryReactiveButton from "../UI/SecondaryReactiveButton/SecondaryReactiveButton";
import LoadingOverlay from "../UI/LoadingOverlay/LoadingOverlay";
import ErrorOverlay from "../UI/ErrorOverlay/ErrorOverlay";

const ListOfTask = () => {
    const taskCtx = useContext(TaskContext);
    const [activeTaskCategory, setActiveTastCategory] = useState("priority");

    function categorySelectHandler(category) {
        setActiveTastCategory(category);
    }

    return (
        <>
            {taskCtx.loading ? (
                <LoadingOverlay />
            ) : taskCtx.error ? (
                <ErrorOverlay message="Could not fetch tasks" />
            ) : (
                <>
                    <View style={styles.buttonsContainer}>
                        <SecondaryReactiveButton
                            onPress={categorySelectHandler.bind(
                                null,
                                "priority"
                            )}
                            isActive={activeTaskCategory === "priority"}
                        >
                            Priority Task
                        </SecondaryReactiveButton>
                        <SecondaryReactiveButton
                            onPress={categorySelectHandler.bind(null, "daily")}
                            isActive={activeTaskCategory === "daily"}
                        >
                            Daily Task
                        </SecondaryReactiveButton>
                    </View>
                    <View>
                        <ScrollView>
                            {taskCtx.dailyTasks.map((dailyTask, index) => (
                                <TaskListItem
                                    key={dailyTask + index}
                                    isActive={activeTaskCategory === "daily"}
                                    name={dailyTask.name}
                                />
                            ))}
                            {taskCtx.priorityTasks.map(
                                (priorityTask, index) => (
                                    <TaskListItem
                                        key={priorityTask + index}
                                        isActive={
                                            activeTaskCategory === "priority"
                                        }
                                        name={priorityTask.name}
                                    />
                                )
                            )}
                        </ScrollView>
                    </View>
                </>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
});

export default ListOfTask;
