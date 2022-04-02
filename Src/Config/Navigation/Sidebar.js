import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  EvilIcons,
  FontAwesome,
} from "@expo/vector-icons";

export default function Sidebar(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.topHeader}>
        <Image
          source={require("./../../Assests/Ellipse9.png")}
          style={styles.image}
        />
        <Text style={styles.name}>Isac Oscar</Text>
      </View>
      <View style={styles.menuContainer}>
        <DrawerItem
          label="Search"
          labelStyle={{}}
          onPress={() => {
            props.navigation.navigate("Search");
          }}
          icon={({ color, size }) => (
            <EvilIcons name="search" size={size} color={"lightgray"} />
          )}
        />
        <DrawerItem
          label="My Profile"
          labelStyle={{}}
          onPress={() => {
            props.navigation.navigate("MyProfile");
          }}
          icon={({ color, size }) => (
            <FontAwesome name="user" size={size} color={"lightgray"} />
          )}
        />
        <DrawerItem
          label="My Favorites"
          labelStyle={{}}
          onPress={() => {
            props.navigation.navigate("MyFavorites");
          }}
          icon={({ color, size }) => (
            <MaterialIcons name="favorite" size={size} color={"lightgray"} />
          )}
        />
        <DrawerItem
          label="More"
          labelStyle={{}}
          onPress={() => {
            props.navigation.navigate("More");
          }}
          icon={({ color, size }) => (
            <AntDesign name="appstore-o" size={size} color={"lightgray"} />
          )}
        />
        <DrawerItem
          label="Logout"
          labelStyle={{}}
          onPress={() => {
            props.navigation.replace("Singin");
          }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="logout" size={size} color={"lightgray"} />
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
