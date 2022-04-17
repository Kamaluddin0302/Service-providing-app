import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Auth, Detail } from "../../Screens/index";
import UserDrawer from "./UserDrawer";
import ServiceProviderDrawer from "./serviceProviderDrawer";
import GetOrder from "../../Screens/GetOrder/GetOrder";
import OrderDetail from "../../Screens/OrderDetail.js/OrderDetail";
import AcceptOrder from "./../../Screens/ServiceProviderPortal/AcceptOrder/AcceptOrder";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SeriveProviderHome">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserHome"
          component={UserDrawer}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="GetOrder"
          component={GetOrder}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#0466C8",
            },
            headerTintColor: "white",
            headerTitle: "Get Order",
          }}
        />

        <Stack.Screen
          name="OrderDetail"
          component={OrderDetail}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#0466C8",
            },
            headerTintColor: "white",
            headerTitle: "Order Detail",
          }}
        />

        <Stack.Screen
          name="AcceptOrder"
          component={AcceptOrder}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#0466C8",
            },
            headerTintColor: "white",
            headerTitle: "Order Detail",
          }}
        />

        <Stack.Screen
          name="SeriveProviderHome"
          component={ServiceProviderDrawer}
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
