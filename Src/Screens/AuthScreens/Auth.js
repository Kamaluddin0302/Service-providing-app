import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AuthTab from "./../../Config/Navigation/AuthTab";

export default function Auth({ navigation, route }) {
  useEffect(() => {
    // navigation.navigate("Home");
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Smart Service App</Text> */}
      <Image
        source={require("./../../Assests/image.webp")}
        style={styles.title}
      />
      <View style={styles.tabBar}>
        <AuthTab />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    marginTop: 100,
  },
  tabBar: {
    backgroundColor: "black",
    flex: 1,
    width: "90%",
  },
});
