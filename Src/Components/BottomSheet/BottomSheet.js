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
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";

export default function BottomSheet({ close, navigation, id }) {
  let [time, setTime] = useState();
  let [technicianLocation, setTechnicianLocation] = useState();

  let UpdateOrder = () => {
    axios
      .put(
        `https://servicesproviderapp.herokuapp.com/api/get/updateorder/${id}?status=accepted&reachtime=${time}&technicianLocatio=${technicianLocation}`
      )
      .then(function (response) {
        if (response.data.result === "success") {
          Toast.showToast("Order Is Sunccessfully Accepted", "#228B22");
          getallOrders();
        } else {
          Toast.showToast(response.data.result, "red");
        }
      })
      .catch(function (error) {
        Toast.showToast(error, "red");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Time With In You Reach</Text>
      <TextInput
        style={styles.textinput}
        value={time}
        placeholder="Time with in you reach"
        onChangeText={(text) => setTime(text)}
      />

      <Text style={styles.title}>Your Current Location</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Your Current Location"
        value={technicianLocation}
        onChangeText={(text) => setTechnicianLocation(text)}
      />

      <View style={styles.buttonView}>
        <Button
          title="Accept Order"
          bgColor="#FFFFFF"
          color="#0466C8"
          width={124}
          redius={8}
          borderColor="#0466C8"
          height={35}
          onpress={() => {
            UpdateOrder();
            close();
          }}
        />
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  buttonView: {
    marginTop: 50,
  },
  textinput: {
    borderWidth: 2,
    borderColor: "#0466C8",
    padding: 10,
    borderRadius: 10,
  },
  title: {
    marginVertical: 5,
    fontWeight: "bold",
    color: "#0466C8",
  },
});
