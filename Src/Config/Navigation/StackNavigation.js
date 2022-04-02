import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Singin, Signup, Auth, Detail } from "../../Screens/index";
import DrawerNavigator from "./Drawernavigatior";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Singup"
          component={Signup}
          options={{
            headerBackTitle: true,
            headerTintColor: "white",
            headerTitleStyle: {
              color: "#fb2056",
            },
            headerStyle: {
              backgroundColor: "#fb2056",
            },
          }}
        />

        <Stack.Screen
          name="Home"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
