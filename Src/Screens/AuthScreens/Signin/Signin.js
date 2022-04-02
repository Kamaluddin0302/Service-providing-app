import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import TextInput from "../../../Components/TextInput/Textinput";
import Button from "../../../Components/Button/Button";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

var radio_props = [
  { label: "User", value: "User" },
  { label: "Service Provider", value: "Service Provider" },
];

export default function Singin({ navigation, route }) {
  let [type, setType] = useState("User");
  let [email, setEmail] = useState("");
  let [Password, setPassword] = useState("");

  useEffect(() => {
    // navigation.navigate("Home");
  }, []);

  console.log(email, Password);

  return (
    <View style={styles.container}>
      <View style={styles.middleView}>
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
          text="Password"
          width={300}
          name="Password"
          security={true}
          value={Password}
          GetInputVlue={(text) => setPassword(text)}
        />
        <Text style={styles.account}>Select Account Type</Text>

        <RadioForm
          radio_props={radio_props}
          initial={"User"}
          onPress={(value) => {
            console.log(value);
            setType(value);
          }}
          formHorizontal={false}
        />

        <Button
          title="Login"
          bgColor="#0466C8"
          color="#ffffff"
          width={300}
          redius={12}
          height={54}
          onpress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
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
