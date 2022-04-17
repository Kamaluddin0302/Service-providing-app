import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import MyCarousel from "../../Components/Carosel/Carosel";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../../Components/Button/Button";
import Review from "../../Components/Review/Review";

let ReviewDetail = [
  {
    name: "Sans Jose",
    Detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus ,Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus",
    image: require("./../../Assests/review1.png"),
  },
  {
    name: "Anita Cruz",
    Detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.    Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit",
    image: require("./../../Assests/review2.png"),
  },
];

export default function OrderDetail({ route }) {
  let { data } = route.params;
  console.log(data);
  return (
    <ScrollView style={{}}>
      <View style={styles.container}>
        <View style={styles.bottomView}>
          <View style={styles.serviceDetail}>
            <ImageBackground
              style={styles.backGroundImage}
              source={{ uri: data.serviceImage }}
            >
              <Text style={styles.address}>{data.serviceName}</Text>
            </ImageBackground>
          </View>
          <View style={styles.map}>
            <Image source={{ uri: data.image }} style={styles.mapImage} />
            <View style={styles.bottomCard}>
              <Text style={styles.costtext}>Service Minimum Price</Text>
              <Text style={styles.cost}>{data.price}$/Hour</Text>
            </View>
          </View>
          <View style={styles.detailView}>
            <View style={styles.descriptionView}>
              <Text style={styles.descriptiontitle}>Detail</Text>
              <Text style={styles.description}>{data.detail}</Text>
            </View>
            <View style={styles.descriptionView}>
              <Text style={styles.descriptiontitle}>Address</Text>
              <Text style={styles.description}>{data.address}</Text>
            </View>
            <View style={styles.descriptionView}>
              <Text style={styles.descriptiontitle}>Posted Date</Text>
              <Text style={styles.description}>{data.date.slice(0, 10)}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingBottom: 20,
  },
  profileView: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    borderRadius: 50,
  },
  nameView: {
    marginLeft: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  type: {
    fontSize: 11,
    color: "#757575",
  },
  whatsapp: {
    backgroundColor: "green",
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "40%",
  },
  bottomView: {
    padding: 20,
  },
  address: {
    marginVertical: 20,
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  area: {
    backgroundColor: "#F7F7F7",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  sizetext: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 20,
  },
  size: {
    fontSize: 15,
    marginLeft: "25%",
  },
  price: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  costtext: {
    fontSize: 16,
  },
  cost: {
    fontSize: 18,
    fontWeight: "bold",
  },
  map: {
    marginVertical: 10,
  },
  mapImage: {
    width: "100%",
    borderRadius: 10,
    height: 200,
  },
  bottomCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 30,
    position: "absolute",
    top: 160,
    width: "100%",
    height: 60,
  },
  descriptionView: {
    marginTop: 10,
    marginBottom: 10,
  },
  descriptiontitle: {
    fontWeight: "bold",
  },
  description: {
    textAlign: "justify",
  },
  facilities: {
    fontSize: 18,
    fontWeight: "bold",
  },
  facilitiesview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  facilitiesName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  right: {
    marginLeft: 15,
  },
  facilitiesDistance: {
    fontSize: 16,
  },
  serviceDetail: {},
  backGroundImage: {
    width: "100%",
    height: 150,
    justifyContent: "center",
  },
  detailView: {
    marginTop: 40,
  },
});
