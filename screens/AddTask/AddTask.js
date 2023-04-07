import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { TaskContext } from "../../store/TaskContext";
import Colors from "../../constants/Colors";
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
            <View
                style={{
                    flex: 1,
                    backgroundColor: Colors.secondary500,
                }}
            >
                <View
                    style={{ backgroundColor: Colors.secondary500, flex: 1 }}
                ></View>
                <View
                    style={{
                        backgroundColor: Colors.primary800,
                        flex: 16,
                        borderTopLeftRadius: 70,
                        borderTopRightRadius: 70,
                        paddingHorizontal: 10,
                    }}
                >
                    <AddTaskForm onSubmit={addTaskHandler} />
                </View>
            </View>
        </>
    );
};

export default AddTask;
