import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import React from "react";
import { Rating, AirbnbRating } from "react-native-ratings";

export default function MainCard() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../../Assests/image1.png")}
        style={styles.imageBack}
      ></ImageBackground>
      <View style={styles.bottomCard}>
        <View style={styles.cardItem}>
          <Text style={styles.title}>Land</Text>
          <View style={styles.heartView}>
            <Image source={require("./../../Assests/heart.png")} />
          </View>
        </View>
        <View style={styles.cardItem}>
          <View style={styles.profileView}>
            <Image
              source={require("./../../Assests/profile.png")}
              style={styles.profileImage}
            />
            <Text style={styles.name}>Timmy bremer</Text>
          </View>
          <Text style={styles.price}>$2,382,000</Text>
        </View>

        <View style={styles.cardItem}>
          <View style={styles.profileView}>
            <Rating
              type="star"
              //   ratingCount={5}
              imageSize={12}
              startingValue={3}
              readonly={true}
            />
            <Text style={styles.count}>20 opinions</Text>
          </View>
          <View style={styles.profileView}>
            <Image
              source={require("./../../Assests/meter.png")}
              style={styles.lengthImage}
            />
            <Text style={styles.length}>1,640 sqft</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    height: 200,
  },
  imageBack: {
    width: 270,
    height: 110,
  },
  location: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.66)",
    width: 130,
    margin: 20,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 5,
    borderRadius: 50,
  },
  bottomCard: {
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 20,
    position: "absolute",
    top: 80,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cardItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  heartView: {
    marginRight: 20,
    backgroundColor: "white",
    elevation: 5,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: -35,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileImage: {
    height: 25,
    width: 25,
    borderRadius: 50,
    marginRight: 10,
  },
  profileView: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 11,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  count: {
    fontSize: 10,
    marginLeft: 3,
    color: "gray",
  },
  length: {
    fontSize: 12,
    color: "#8A9BAB",
    marginLeft: 5,
  },
  lengthImage: {
    height: 10,
    width: 10,
  },
});
