import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { TaskContext } from "../../store/TaskContext";
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";

const AddTask = ({ navigation }) => {
    const taskCtx = useContext(TaskContext);

    function addTaskHandler(category, values) {
        taskCtx.addTask(category, values);
        navigation.navigate("TaskList");
    }

    return (
        <>
            <StatusBar style="light" />
            <View className="flex-1 bg-blue-600">
                <View className="bg-blue-600 flex-1"></View>
                <View className="bg-slate-100 flex-[16] rounded-t-[70px] px-2.5">
                    <AddTaskForm onSubmit={addTaskHandler} />
                </View>
            </View>
        </>
    );
};

export default AddTask;
