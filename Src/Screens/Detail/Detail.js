import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
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

export default function Detail() {
  return (
    <ScrollView
      style={{
        marginTop: 30,
      }}
    >
      <View style={styles.container}>
        <MyCarousel />
        <View style={styles.bottomView}>
          <View style={styles.profileView}>
            <Image
              source={require("./../../Assests/profile.png")}
              style={styles.profileImage}
            />

            <View style={styles.nameView}>
              <Text style={styles.name}>Timmy bremer</Text>
              <Text style={styles.type}>Owner</Text>
            </View>
            <View style={styles.whatsapp}>
              <FontAwesome name="whatsapp" size={18} color="white" />
            </View>
          </View>
          <Text style={styles.address}>
            163 E 81st St #2C, Los Angeles, CA 10028
          </Text>
          <View style={styles.area}>
            <Image source={require("./../../Assests/meter.png")} />
            <Text style={styles.sizetext}>Size of Area</Text>
            <Text style={styles.size}>1,640 sqft</Text>
          </View>

          <View style={styles.price}>
            <Text style={styles.costtext}>Average living cost</Text>
            <Text style={styles.cost}>500$/month</Text>
          </View>

          <View style={styles.map}>
            <Image
              source={require("./../../Assests/map.png")}
              style={styles.mapImage}
            />
            <View style={styles.bottomCard}>
              <Text style={styles.cost}>$2,382,000</Text>
              <Button
                title="Reservation"
                bgColor="#0466C8"
                color="white"
                width={124}
                redius={20}
                height={43}
                borderColor="#0466C8"
                onpress={() => alert("see more")}
              />
            </View>
          </View>
          <View style={styles.descriptionView}>
            <Text style={styles.descriptiontitle}>Descriptions</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </Text>
          </View>
          <View>
            <Text style={styles.facilities}>Nearest public facilities</Text>
            <View style={styles.facilitiesview}>
              <View style={styles.item}>
                <Image source={require("./../../Assests/kitchen.png")} />
                <View style={styles.right}>
                  <Text style={styles.facilitiesName}>Supermarket</Text>
                  <Text style={styles.facilitiesDistance}>200m</Text>
                </View>
              </View>
              <View style={styles.item}>
                <Image source={require("./../../Assests/train.png")} />
                <View style={styles.right}>
                  <Text style={styles.facilitiesName}>Train station</Text>
                  <Text style={styles.facilitiesDistance}>500m</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.facilities}>Reviews</Text>
            {ReviewDetail.map((v, i) => (
              <Review key={i} data={v} />
            ))}
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
    fontSize: 22,
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
  },
  bottomCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 30,
    position: "absolute",
    top: 140,
    width: "100%",
    height: 97,
  },
  descriptionView: {
    marginTop: 40,
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
});
