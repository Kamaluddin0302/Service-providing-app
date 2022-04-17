import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import TextInput from "../../../Components/TextInput/Textinput";
import Button from "../../../Components/Button/Button";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Singup({ navigation, route }) {
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [Password, setPassword] = useState("");
  let [address, setAddress] = useState("");

  useEffect(() => {
    // navigation.navigate("Home");
  }, []);

  let signupFunc = () => {
    console.log(address, name, Password, email);
    if (!name) {
      alert("Please Enter The Name");
    } else if (!email) {
      alert("Please Enter The Email");
    } else if (!address) {
      alert("Please Enter The Address");
    } else if (!Password) {
      alert("Please Enter The Password");
    } else {
      axios
        .post(`https://servicesproviderapp.herokuapp.com/api/user/register`, {
          name: name,
          email: email,
          password: Password,
          address: address,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.result === "success") {
            alert("Signup Success");
            let userObj = { user: response.data.user };
            AsyncStorage.setItem("User", JSON.stringify(userObj));
            navigation.navigate("UserHome");
          } else {
            alert(response.data.message);
          }
        })
        .catch(function (error) {
          console.log(error);
          alert(error.message);
        });
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.middleView}>
          <TextInput
            require={true}
            text="Name"
            width={300}
            name="Name"
            value={name}
            GetInputVlue={(text) => setName(text)}
          />

          <TextInput
            require={true}
            text="Email address"
            width={300}
            name="Email"
            type="email-address"
            value={email}
            GetInputVlue={(text) => setEmail(text)}
          />
          <TextInput
            require={true}
            text="Address"
            width={300}
            name="Address"
            value={address}
            GetInputVlue={(text) => setAddress(text)}
          />
          <TextInput
            require={true}
            text="Password"
            width={300}
            name="Password"
            security={true}
            value={Password}
            GetInputVlue={(text) => setPassword(text)}
          />

          <Button
            title="Sign-Up"
            bgColor="#0466C8"
            color="#ffffff"
            width={300}
            redius={12}
            height={54}
            onpress={() => signupFunc()}
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 36,
    color: "#0466C8",
    fontWeight: "bold",
  },

  middleView: {
    alignSelf: "center",
    marginTop: 50,
  },
  account: {
    color: "#0466C8",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
