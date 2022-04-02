import * as React from "react";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Singin, Signup } from "./../../Screens/index";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Singin} />
      <Tab.Screen name="Sign-up" component={Signup} />
    </Tab.Navigator>
  );
}
