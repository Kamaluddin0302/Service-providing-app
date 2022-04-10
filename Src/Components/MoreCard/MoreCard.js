import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function MoreCard({ data, addItemHandleChange, navigation }) {
  console.log(data);
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: data.serviceImage }} style={styles.image} />
      <View style={styles.right}>
        <Text style={styles.price}>{data.serviceName}</Text>
        <Text style={styles.address}>{data.serviceDetail}</Text>
      </View>
      <TouchableOpacity
        style={styles.getService}
        onPress={() =>
          navigation.navigate("getOrder", {
            data,
          })
        }
      >
        <Text style={styles.getServiceText}>Get Service</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    elevation: 10,
    marginVertical: 10,
    padding: 10,
    borderRadius: 16,
    flexDirection: "row",
    width: "93%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  address: {
    fontSize: 11,
  },
  right: {
    // width: "5%",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 20,
  },
  getService: {
    backgroundColor: "#0466C8",
    padding: 10,
    borderRadius: 10,
  },
  getServiceText: {
    fontSize: 10,
    color: "white",
  },
});
