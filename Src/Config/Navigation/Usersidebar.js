import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import {
  MaterialCommunityIcons,
  AntDesign,
  EvilIcons,
  FontAwesome,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserSidebar(props) {
  let [user, setUser] = useState("");
  useEffect(async () => {
    let User = await AsyncStorage.getItem("user");
    if (User) {
      setUser(JSON.parse(User).user);
      console.log(User);
    }
  }, []);
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.topHeader}>
        <Image
          source={require("./../../Assests/Ellipse9.png")}
          style={styles.image}
        />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <View style={styles.menuContainer}>
        <DrawerItem
          label="Home"
          labelStyle={{}}
          onPress={() => {
            props.navigation.navigate("Home");
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
          label="Order Status"
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
            props.navigation.replace("Auth");
          }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="logout"
              size={size}
              color={"lightgray"}
            />
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
