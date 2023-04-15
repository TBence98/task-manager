import { useState } from "react";
import { View, Text, Pressable } from "react-native";

import Input from "../Input/Input";
import PrimaryReactiveButton from "../UI/PrimaryReactiveButton/PrimaryReactiveButton";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import formatDate from "../../utils/formatDate";

const AddTaskForm = ({ onSubmit, defaultValues }) => {
    const [category, setCategory] = useState(
        defaultValues && defaultValues.category
            ? defaultValues.category
            : "priority"
    );
    const [inputs, setInputs] = useState({
        startDate: {
            value:
                defaultValues && defaultValues.startDate
                    ? defaultValues.startDate
                    : new Date(),
            isValid: true,
        },
        endDate: {
            value:
                defaultValues && defaultValues.endDate
                    ? defaultValues.endDate
                    : new Date(),
            isValid: true,
        },
        title: {
            value:
                defaultValues && defaultValues.title ? defaultValues.title : "",
            isValid: true,
        },
        description: {
            value:
                defaultValues && defaultValues.description
                    ? defaultValues.description
                    : "",
            isValid: true,
        },
    });

    const [activeCalendar, setActiveCalendar] = useState("");

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputs((curInputs) => {
            return {
                ...curInputs,
                [inputIdentifier]: { value: enteredValue, isValid: true },
            };
        });
    }

    function dateChangeHandler(inputIdentifier, { type }, selectedDate) {
        if (type === "set") {
            setActiveCalendar("");
            inputChangedHandler(inputIdentifier, selectedDate);
        } else {
            setActiveCalendar("");
        }
    }

    function categoryChangedHandler(category) {
        setCategory(category);
    }

    function submitHandler() {
        // validation
        const values = {};

        for (let input in inputs) {
            if (inputs.hasOwnProperty(input)) {
                const valuesKey = input === "title" ? "name" : input;
                values[valuesKey] = inputs[input].value;
            }
        }
        onSubmit(category, values);
    }

    return (
        <View className="mt-12 relative flex-1">
            {activeCalendar ? (
                <DateTimePicker
                    mode="date"
                    display="default"
                    value={new Date(inputs[activeCalendar].value)}
                    onChange={dateChangeHandler.bind(null, activeCalendar)}
                />
            ) : null}
            <View className="flex-row justify-between">
                <Pressable
                    onPress={() => setActiveCalendar("startDate")}
                    className="flex-1"
                >
                    <Input
                        label="Start"
                        invalid={!inputs.startDate.isValid}
                        textInputConfig={{
                            placeholder: formatDate(inputs.startDate.value),
                            editable: false,
                        }}
                    />
                </Pressable>
                <Pressable
                    onPress={() => setActiveCalendar("endDate")}
                    className="flex-1"
                >
                    <Input
                        label="End"
                        invalid={!inputs.endDate.isValid}
                        textInputConfig={{
                            placeholder: formatDate(inputs.endDate.value),
                            editable: false,
                        }}
                    />
                </Pressable>
            </View>
            <Input
                label="Title"
                invalid={!inputs.title.isValid}
                textInputConfig={{
                    onChangeText: inputChangedHandler.bind(null, "title"),
                    value: inputs.title.value,
                }}
            />
            <View className="my-2 mx-1">
                <Text className="text-sm font-bold text-blue-600 mb-1">
                    Category
                </Text>
                <View className="flex-row justify-between">
                    <PrimaryReactiveButton
                        isActive={category === "priority"}
                        onPress={categoryChangedHandler.bind(null, "priority")}
                        style="flex-1"
                    >
                        Priority Task
                    </PrimaryReactiveButton>
                    <PrimaryReactiveButton
                        isActive={category === "daily"}
                        onPress={categoryChangedHandler.bind(null, "daily")}
                        style="flex-1"
                    >
                        Daily Task
                    </PrimaryReactiveButton>
                </View>
            </View>
            <Input
                label="Description"
                invalid={!inputs.description.isValid}
                textInputConfig={{
                    multiline: true,
                    onChangeText: inputChangedHandler.bind(null, "description"),
                    value: inputs.description.value,
                }}
            />
            <PrimaryButton
                style="absolute bottom-3 left-0 right-0"
                onPress={submitHandler}
            >
                Create Task
            </PrimaryButton>
        </View>
    );
};

export default AddTaskForm;
