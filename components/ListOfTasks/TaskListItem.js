import { View, Text } from "react-native";

const TaskListItem = ({ isActive, name }) => {
    return (
        <View className="p-2.5 my-1 bg-white rounded border-slate-200 border-2 flex-row items-center justify-between">
            <Text className={`font-bold ${isActive ? "text-blue-600" : ""}`}>
                {name}
            </Text>
            <View className="w-[20px] h-[20px] rounded-[10px] border-blue-600 border-2 items-center justify-center">
                {isActive ? (
                    <View className="w-[14px] h-[14px] rounded-[7px] bg-blue-600"></View>
                ) : null}
            </View>
        </View>
    );
};

export default TaskListItem;
