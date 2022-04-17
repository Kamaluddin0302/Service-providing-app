import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllOrders, getCurrentUserOrder } from "../../../Config/function";
import ImageViewer from "react-native-image-zoom-viewer";
import axios from "axios";
import Toast from "react-native-smart-toast-alert";

export default function AllOrders({ navigation }) {
  let [order, setOrder] = useState();
  let [modalVisible, setmodalVisible] = useState(false);

  let getallOrders = async () => {
    let userOrder = await getAllOrders();
    if (userOrder) {
      setOrder(userOrder);
    }
  };

  useEffect(async () => {
    // const unsubscribe = navigation.addListener("focus", async () => {
    getallOrders();
    // });
    // return unsubscribe;
  }, [navigation]);



  return (
    <ScrollView>
      <Toast />
      <View>
        <Text style={styles.title}>Services Status</Text>

        {order?.map((val, ind) => (
          <View style={styles.card} key={ind}>
            <View style={styles.topHeader}>
              <Image
                source={{ uri: val.serviceImage }}
                style={styles.imagetop}
              />
              <Text style={styles.name}>{val.serviceName}</Text>
            </View>
            <Image source={{ uri: val.image }} style={styles.image} />

            {/* <View>
              <TouchableOpacity onPress={() => setmodalVisible(true)}>
                <Image source={{ uri: val.image }} style={styles.image} />
              </TouchableOpacity>
              <Modal
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setmodalVisible(false)}
              >
                <ImageViewer imageUrls={[{ url: order[ind].image }]} />
              </Modal>
            </View> */}

            <TouchableOpacity
              style={styles.container}
              onPress={() => navigation.navigate("AcceptOrder", { data: val })}
            >
              <View style={styles.right}>
                <Text style={styles.price}>{val.detail}</Text>
                <Text style={styles.address}>{val.address}</Text>
              </View>
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
    borderRadius: 50,
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
    width: 260,
    height: 260,
    // borderRadius: 10,
    marginVertical: 5,
    alignSelf: "center",
  },
  getService: {
    backgroundColor: "green",
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
