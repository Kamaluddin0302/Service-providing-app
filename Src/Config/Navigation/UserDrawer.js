import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  EvilIcons,
  FontAwesome,
} from "@expo/vector-icons";

import { More, Logout, MyProfile } from "./../../Screens/index";
import Sidebar from "./Usersidebar";
import Home from "../../Screens/UserPortal/Home/Home";
import ServiceStatus from "../../Screens/UserPortal/ServiceStatus/serviceStatus";
const Drawer = createDrawerNavigator();

export default function UserDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "white",
          width: 250,
          paddingTop: 20,
          borderBottomRightRadius: 40,
          borderTopRightRadius: 20,
        },
      }}
      drawerContent={(props) => <Sidebar {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "#0466C8",
          },
          headerTitleStyle: {
            color: "white",
            fontSize: 14,
          },
          headerTintColor: "white",
          headerTitle: "Smart Service App",
          drawerIcon: ({ color, size }) => (
            <EvilIcons name="search" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          headerStyle: {
            backgroundColor: "#0466C8",
          },
          headerTitleStyle: {
            color: "white",
          },
          headerTintColor: "white",
          drawerLabel: "My Profile",
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="OrdersStatus"
        component={ServiceStatus}
        options={{
          headerStyle: {
            backgroundColor: "#0466C8",
          },
          headerTitleStyle: {
            color: "white",
          },
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
