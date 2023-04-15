import { View, Text } from "react-native";

const DateTile = ({ dayName, date, isActive }) => {
    return (
        <View
            className={`bg-slate-300 py-2 w-[50px] mx-1.5 rounded-md ${
                isActive ? "bg-blue-600 py-3 w-[60px]" : ""
            }`}
        >
            <Text
                className={`text-blue-700 text-center ${
                    isActive ? "text-white" : ""
                }`}
            >
                {dayName}
            </Text>
            <Text
                className={`text-blue-700 text-center font-bold ${
                    isActive ? "text-white" : ""
                }`}
            >
                {date}
            </Text>
        </View>
    );
};

export default DateTile;
