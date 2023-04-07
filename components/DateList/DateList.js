import { ScrollView, View, Text } from "react-native";

import DateTile from "./DateTile";

const DateList = ({ days, activeDate }) => {
    return (
        <ScrollView
            horizontal={true}
            contentContainerStyle={{
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            {days.map((day, index) => (
                <DateTile
                    key={index}
                    dayName={day}
                    date={index + 1}
                    isActive={activeDate === index + 1}
                />
            ))}
        </ScrollView>
    );
};

export default DateList;
