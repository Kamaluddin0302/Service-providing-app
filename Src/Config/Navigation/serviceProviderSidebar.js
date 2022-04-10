import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";

export default function ServiceProviderSidebar(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.topHeader}>
        <Image
          source={require("./../../Assests/Ellipse9.png")}
          style={styles.image}
        />
        <Text style={styles.name}>Service Provider</Text>
      </View>
      <View style={styles.menuContainer}>
        <DrawerItem
          label="HOME"
          labelStyle={{
            fontWeight: "bold",
          }}
          onPress={() => {
            props.navigation.navigate("ServiceHome");
          }}
          icon={({ color, size }) => (
            <FontAwesome name="home" size={size} color={"gray"} />
          )}
        />
        <DrawerItem
          label="ADD SERVICE"
          labelStyle={{
            fontWeight: "bold",
          }}
          onPress={() => {
            props.navigation.navigate("Add Services");
          }}
          icon={({ color, size }) => (
            <Entypo name="add-to-list" size={size} color={"gray"} />
          )}
        />
        <DrawerItem
          label="LOGOUT"
          labelStyle={{
            fontWeight: "bold",
          }}
          onPress={() => {
            props.navigation.replace("Auth");
          }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="logout" size={size} color={"gray"} />
          )}
        />
      </View>
    </DrawerContentScrollView>
  );
}

let styles = StyleSheet.create({
  menuContainer: {},
  topHeader: {
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
