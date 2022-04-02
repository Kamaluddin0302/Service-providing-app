import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  EvilIcons,
  FontAwesome,
} from "@expo/vector-icons";

import {
  More,
  MyFavorite,
  Search,
  Logout,
  MyProfile,
} from "./../../Screens/index";
import Sidebar from "./Sidebar";
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Search"
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
        name="Search"
        component={Search}
        options={{
          headerStyle: {
            backgroundColor: "#0466C8",
          },
          headerTitleStyle: {
            color: "white",
            fontSize: 14,
          },
          headerTintColor: "white",
          headerTitle: "What’s Happening ?",
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
        name="MyFavorites"
        component={MyFavorite}
        options={{
          headerStyle: {
            backgroundColor: "#0466C8",
          },
          headerTitleStyle: {
            color: "white",
          },
          drawerLabel: "My Favorites",
          headerTintColor: "white",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="More"
        component={More}
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
