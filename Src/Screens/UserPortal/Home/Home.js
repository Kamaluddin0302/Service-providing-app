import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import MainCard from "../../../Components/MainCard/MainCard";
import MoreCard from "./../../../Components/MoreCard/MoreCard";
import BottomSheet from "./../../../Components/BottomSheet/BottomSheet";
import RBSheet from "react-native-raw-bottom-sheet";
import { getallService } from "./../../../Config/function";

let card = [
  {
    image: require("./../../../Assests/cardimage1.png"),
    price: "$433,000",
    address: "408 E 92nd St, New York, NY 10128",
  },
  {
    image: require("./../../../Assests/cardimage2.png"),
    price: "$712,000",
    address: "440 E 79th St APT 8C, New York, NY 10075",
  },
];
export default function Home({ navigation }) {
  const windowHeight = Dimensions.get("window").height;
  let [services, setServices] = useState();

  // const addItemHandleChange = () => {
  //   this[RBSheet + 0].open();
  // };

  // const addItemHandleChangeClose = () => {
  //   this[RBSheet + 0].close();
  // };

  useEffect(async () => {
    let getallServices = await getallService();
    setServices(getallServices);

    console.log(getallServices);
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.searchView}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a Service"
          />
          <EvilIcons name="search" size={25} color={"gray"} />
        </View>

        <View>
          <Text style={styles.review}>Review</Text>
          <ScrollView
            horizontal={true}
            style={styles.slider}
            showsHorizontalScrollIndicator={false}
          >
            <MainCard />
            <MainCard />
          </ScrollView>
        </View>

        <View>
          <Text style={styles.more}>All Services</Text>
          {services?.map((v, i) => (
            <MoreCard
              key={i}
              data={v}
              navigation={navigation}
              
              // addItemHandleChange={addItemHandleChange}
            />
          ))}
        </View>
      </View>
      {/* 
      <RBSheet
        ref={(ref) => {
          this[RBSheet + 0] = ref;
        }}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "#2d2e3057",
          },
          draggableIcon: {
            backgroundColor: "#A0A0A0",
          },
          container: {
            borderTopEndRadius: 15,
            borderTopLeftRadius: 15,
          },
        }}
        height={windowHeight - 150}
      >
        <BottomSheet navigation={navigation} close={addItemHandleChangeClose} />
      </RBSheet> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: "white",
    flex: 1,
  },
  findText: {
    color: "#7D7F88",
  },
  findPlaceView: {
    flexDirection: "row",
    alignItems: "center",
    width: "45%",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  place: {
    fontWeight: "bold",
  },
  searchView: {
    width: "93%",
    backgroundColor: "#F4FAFF",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    elevation: 3,
  },
  searchInput: {
    width: "90%",
    paddingLeft: 10,
  },
  slider: {
    marginVertical: 20,
  },
  more: {
    fontWeight: "bold",
    fontSize: 18,
  },
  review: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 20,
  },
});
