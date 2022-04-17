import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MyProfile() {
  let [user, setUser] = useState();
  useEffect(async () => {
    // const unsubscribe = navigation.addListener("focus", async () => {
    const value = await AsyncStorage.getItem("User");
    if (value) {
      let user = JSON.parse(value).user;
      setUser(user);
      console.log(user);
    }
    // });
    // return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("./../../Assests/profile.jpg")}
        style={styles.image}
      />
      <Text style={styles.name}> Name : {user?.name}</Text>
      <Text style={styles.name}>Address : {user?.address}</Text>
      <Text style={styles.name}>Email : {user?.email}</Text>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignSelf: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    alignSelf: "center",
  },
});
