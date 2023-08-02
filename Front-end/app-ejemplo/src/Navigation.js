import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Menu from "./componentes/home/Menu";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ListComponent from "./componentes/list/List";
import Server from "./componentes/server/Server";
import Chat from "./componentes/openai/Chat";
import Pdf from "./componentes/pdf/Pdf";

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Menu} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({color, size}) => {
                    return <MaterialCommunityIcons name="home" color={color} size={size} />
                },
            }}>
            </Tab.Screen>
            <Tab.Screen name="List" component={ListComponent} options={{
                tabBarLabel: "Listado",
                tabBarIcon: ({color, size}) => {
                    return <MaterialCommunityIcons name="clipboard-list" color={color} size={size} />
                },
            }}></Tab.Screen>
            <Tab.Screen name="Server" component={Server} options={{
                tabBarLabel: "Server",
                tabBarIcon: ({color, size}) => {
                    return <MaterialCommunityIcons name="comment-edit-outline" color={color} size={size} />
                },
            }}></Tab.Screen>
            <Tab.Screen name="OpenAi" component={Chat} options={{
                tabBarLabel: "OpenAi",
                tabBarIcon: ({color, size}) => {
                    return <MaterialCommunityIcons name="comment-edit-outline" color={color} size={size} />
                },
            }}></Tab.Screen>
            <Tab.Screen name="PDF" component={Pdf} options={{
                tabBarLabel: "PDF",
                tabBarIcon: ({color, size}) => {
                    return <MaterialCommunityIcons name="comment-edit-outline" color={color} size={size} />
                },
            }}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default Navigation;