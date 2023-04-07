import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../../constants/Colors";

import Input from "../Input/Input";
import PrimaryReactiveButton from "../UI/PrimaryReactiveButton/PrimaryReactiveButton";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";

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
                    : "",
            isValid: true,
        },
        endDate: {
            value:
                defaultValues && defaultValues.endDate
                    ? defaultValues.endDate
                    : "",
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

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputs((curInputs) => {
            return {
                ...curInputs,
                [inputIdentifier]: { value: enteredValue, isValid: true },
            };
        });
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
        <View style={{ marginTop: 50 }}>
            <View style={styles.inputRow}>
                <Input
                    style={styles.rowInput}
                    label="Start"
                    invalid={!inputs.startDate.isValid}
                    textInputConfig={{
                        keyboardType: "decimal-pad",
                        onChangeText: inputChangedHandler.bind(
                            null,
                            "startDate"
                        ),
                        placeholder: "YYYY-MM-DD",
                        value: inputs.startDate.value,
                    }}
                />
                <Input
                    style={styles.rowInput}
                    label="End"
                    invalid={!inputs.endDate.isValid}
                    textInputConfig={{
                        keyboardType: "decimal-pad",
                        onChangeText: inputChangedHandler.bind(null, "endDate"),
                        placeholder: "YYYY-MM-DD",
                        value: inputs.endDate.value,
                    }}
                />
            </View>
            <Input
                label="Title"
                invalid={!inputs.title.isValid}
                textInputConfig={{
                    onChangeText: inputChangedHandler.bind(null, "title"),
                    value: inputs.title.value,
                }}
            />
            <View style={styles.categorBlock}>
                <Text style={styles.label}>Category</Text>
                <View style={styles.inputRow}>
                    <PrimaryReactiveButton
                        isActive={category === "priority"}
                        onPress={categoryChangedHandler.bind(null, "priority")}
                        style={styles.rowInput}
                    >
                        Priority Task
                    </PrimaryReactiveButton>
                    <PrimaryReactiveButton
                        isActive={category === "daily"}
                        onPress={categoryChangedHandler.bind(null, "daily")}
                        style={styles.rowInput}
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
            {/* <Button title="Add Task" onPress={submitHandler} /> */}
            <PrimaryButton style={styles.addTaskButton} onPress={submitHandler}>
                Create Task
            </PrimaryButton>
        </View>
    );
};

const styles = StyleSheet.create({
    inputRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    rowInput: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        color: Colors.secondary400,
        marginBottom: 4,
    },
    addTaskButton: {
        marginTop: 40,
    },
    categorBlock: {
        marginVertical: 8,
        marginHorizontal: 4,
    },
});

export default AddTaskForm;
