import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function MoreCard({ data, addItemHandleChange }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => addItemHandleChange()}
    >
      <Image source={data.image} />
      <View style={styles.right}>
        <Text style={styles.price}>{data.price}</Text>
        <Text style={styles.address}>{data.address}</Text>
      </View>
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
    width: "55%",
  },
});
