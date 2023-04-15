import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import TaskProvider from "./store/TaskContext";
import Home from "./screens/Home/Home";
import Personal from "./screens/Personal/Personal";
import TaskList from "./screens/TaskList/TaskList";
import AddTask from "./screens/AddTask/AddTask";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const httpLink = createHttpLink({
    uri: "https://graphql.contentful.com/content/v1/spaces/uqc7pcypi89w",
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: "Bearer yhXbILxafWv4IJnL5B9IQ9DVqHTVJzIfxTzNS3n4kls",
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function TabNavigator() {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: "#c3cfe6",
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={30} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="TaskList"
                component={TaskList}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="calendar" color={color} size={30} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Personal"
                component={Personal}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" color={color} size={30} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

export default function App() {
    return (
        <ApolloProvider client={client}>
            <TaskProvider>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen
                            name="TabNavigator"
                            component={TabNavigator}
                        />
                        <Stack.Screen name="AddTask" component={AddTask} />
                    </Stack.Navigator>
                </NavigationContainer>
            </TaskProvider>
        </ApolloProvider>
    );
}
