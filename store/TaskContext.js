import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

export const TaskContext = React.createContext({
    priorityTasks: [],
    dailyTasks: [],
    addTask: (category, task) => {},
});

const GET_TASKS = gql`
    query taskCollection($limit: Int!, $skip: Int!) {
        taskCollection(limit: $limit, skip: $skip) {
            items {
                name
            }
            total
        }
    }
`;

const GET_PROJECTS = gql`
    query projectCollection($limit: Int!, $skip: Int!) {
        projectCollection(limit: $limit, skip: $skip) {
            items {
                name
                deadline
            }
            total
        }
    }
`;

let isRemoteTasksReady = false;

const TaskProvider = ({ children }) => {
    const {
        loading: tasksLoading,
        error: tasksError,
        data: tasksData,
    } = useQuery(GET_TASKS, {
        variables: {
            limit: 10,
            skip: 0,
        },
    });

    const {
        loading: projectsLoading,
        error: projectsError,
        data: projectsData,
    } = useQuery(GET_PROJECTS, {
        variables: {
            limit: 10,
            skip: 0,
        },
    });

    const [tasks, setTasks] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (!isRemoteTasksReady && tasksData && projectsData) {
            setTasks(tasksData.taskCollection.items);
            setProjects(projectsData.projectCollection.items);
            isRemoteTasksReady = true;
        }
    }, [tasksData, projectsData]);

    function addTask(category, task) {
        if (category !== "priority" && category !== "daily") {
            throw Error(
                "argument category value should be either 'priority' or 'daily"
            );
        }

        if (category === "priority") {
            setProjects((projectsState) => [...projectsState, task]);
        }

        if (category === "daily") {
            setTasks((tasksState) => [...tasksState, task]);
        }
    }

    const values = {
        priorityTasks: projects,
        dailyTasks: tasks,
        addTask,
    };

    return (
        <TaskContext.Provider value={values}>{children}</TaskContext.Provider>
    );
};

export default TaskProvider;
