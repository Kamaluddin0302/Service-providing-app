import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCurrentUserOrder } from "../../../Config/function";
import { ScrollView } from "react-native-gesture-handler";

export default function ServiceStatus({ navigation }) {
  let [order, setOrder] = useState();
  useEffect(async () => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const value = await AsyncStorage.getItem("User");
      if (value) {
        let user = JSON.parse(value).user;
        console.log(user);
        let userOrder = await getCurrentUserOrder(user._id);
        console.log(userOrder, "kmkfm");
        if (userOrder) {
          setOrder(userOrder);
        }
      }
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Services Status</Text>

        {order?.reverse().map((val, ind) => (
          <View style={styles.card} key={ind}>
            <View style={styles.topHeader}>
              <Image
                source={{ uri: val.serviceImage }}
                style={styles.imagetop}
              />
              <Text style={styles.name}>{val.serviceName}</Text>
            </View>
            <TouchableOpacity
              style={styles.container}
              onPress={() => navigation.navigate("OrderDetail", { data: val })}
            >
              <Image source={{ uri: val.image }} style={styles.image} />
              <View style={styles.right}>
                <Text style={styles.price}>{val.detail}</Text>
                <Text style={styles.address}>{val.address}</Text>
              </View>
              <TouchableOpacity style={styles.getService} disabled={true}>
                <Text style={styles.getServiceText}>Pendding</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

let styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "white",
    marginVertical: 10,
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 5,
  },
  imagetop: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  topHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "white",
    elevation: 10,
    marginVertical: 10,
    padding: 10,
    borderRadius: 16,
    flexDirection: "row",
    width: "93%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10,
  },
  address: {
    fontSize: 15,
  },
  right: {
    // width: "5%",
    width: "45%",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  getService: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 10,
  },
  getServiceText: {
    fontSize: 10,
    color: "white",
  },
  name: {
    fontWeight: "bold",
  },
});
