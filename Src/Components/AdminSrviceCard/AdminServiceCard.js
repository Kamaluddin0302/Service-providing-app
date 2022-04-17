import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import axios from "axios";
import Toast from "react-native-smart-toast-alert";

export default function AdminSerivceCard({
  data,
  RefreshData,
  navigation,
  type,
}) {
  console.log(data);

  let DeletService = () => {
    axios
      .delete(
        `https://servicesproviderapp.herokuapp.com/api/get/deleteService/${data._id}`
      )
      .then(function (response) {
        if (response.data.result === "success") {
          RefreshData("delete");
        } else {
          console.log(response.data);
          RefreshData("error");
        }
      })
      .catch(function (error) {
        console.log(error);
        RefreshData("error");
      });
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: data.serviceImage }} style={styles.image} />
      <View style={styles.right}>
        <Text style={styles.price}>{data.serviceName}</Text>
        <Text style={styles.address}>{data.serviceDetail}</Text>
      </View>
      <TouchableOpacity
        style={styles.getService}
        onPress={() => DeletService()}
      >
        <Text style={styles.getServiceText}>Delete</Text>
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
    width: "50%",
  },
  image: {
    width: 80,
    height: 80,
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
