import { View, KeyboardAvoidingView, Dimensions, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { TaskContext } from "../../store/TaskContext";
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";
import Header from "../../components/Header/Header";

const AddTask = ({ navigation }) => {
    const taskCtx = useContext(TaskContext);

    function addTaskHandler(category, values) {
        taskCtx.addTask(category, values);
        navigation.navigate("TaskList");
    }

    const formHeight = Math.floor(Dimensions.get("window").height * 0.8);

    return (
        <>
            <StatusBar style="light" />
            <KeyboardAvoidingView
                className="flex-1 bg-blue-600"
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <Header navigationTarget="TaskList" title="Add Task" />
                <View className="flex-1 justify-end">
                    <View
                        style={{ height: formHeight }}
                        className={`bg-slate-100 rounded-t-[70px] px-2.5`}
                    >
                        <AddTaskForm onSubmit={addTaskHandler} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    );
};

export default AddTask;
