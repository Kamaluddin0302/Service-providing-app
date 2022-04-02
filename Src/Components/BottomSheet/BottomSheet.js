import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Rating, AirbnbRating } from "react-native-ratings";
import Button from "./../../Components/Button/Button";

export default function BottomSheet({ close, navigation }) {
  return (
    <View>
      <ImageBackground
        source={require("./../../Assests/image3.png")}
        style={styles.backimage}
      >
        <ImageBackground
          source={require("./../../Assests/image2.png")}
          style={styles.backimage2}
        >
          <TouchableOpacity style={styles.cross} onPress={() => close()}>
            <Image source={require("./../../Assests/cross.png")} />
          </TouchableOpacity>
          <View style={styles.bottomcard}>
            <Text style={styles.name}>Craftman’s Cafe</Text>
            <Text style={styles.shortDetail}>
              520 N Btoudry Ave Los Angeles
            </Text>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={15}
              startingValue={5}
              readonly={true}
              style={{
                alignSelf: "flex-start",
              }}
              ratingContainerStyle={{}}
            />
          </View>
        </ImageBackground>
      </ImageBackground>

      <View style={styles.detailView}>
        <Text style={styles.title}>Cuisines</Text>
        <Text style={styles.subtitle}>
          Latin | Cuban | Mexian | Caribbean and African
        </Text>
        <View style={styles.itemView}>
          <View>
            <Text style={styles.title}>Meals</Text>
            <Text style={styles.subtitle}>Lunch and Dinner</Text>
          </View>
          <View>
            <Text style={styles.title}>Special Deals</Text>
            <Text style={styles.subtitle}>Vegitarian Friendly</Text>
          </View>
        </View>
        <Text style={styles.title}>Features</Text>

        <View style={styles.itemView}>
          <View>
            <View style={styles.itemList}>
              <Image source={require("./../../Assests/kitchen.png")} />
              <Text style={styles.itemText}>Open Kitchen</Text>
            </View>
            <View style={styles.itemList}>
              <Image source={require("./../../Assests/Car.png")} />
              <Text style={styles.itemText}>Street parking</Text>
            </View>
            <View style={styles.itemList}>
              <Image source={require("./../../Assests/wifi.png")} />
              <Text style={styles.itemText}>Free WiFi</Text>
            </View>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="See full Menu"
              bgColor="#FFFFFF"
              color="#0466C8"
              width={124}
              redius={8}
              borderColor="#0466C8"
              height={50}
              onpress={() => {
                navigation.navigate("Detail");
                close();
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
  backimage: {
    width: "100%",
    height: 200,
    marginTop: -25,
  },
  backimage2: {
    width: "100%",
    height: "100%",
  },
  cross: {
    alignSelf: "flex-end",
    margin: 30,
  },
  bottomcard: {
    marginTop: 40,
    marginLeft: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  shortDetail: {
    fontSize: 12,
    color: "lightgray",
  },
  detailView: {
    padding: 20,
  },
  title: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 15,
    marginVertical: 10,
    color: "black",
  },
  itemView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemList: {
    flexDirection: "row",
    marginVertical: 10,
  },
  itemText: {
    marginLeft: 20,
  },
  buttonView: {
    marginTop: 50,
  },
});
