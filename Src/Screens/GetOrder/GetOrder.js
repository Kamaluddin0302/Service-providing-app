import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import Button from "./../../Components/Button/Button";
import { Feather } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import firebase from "firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import CheckBox from "react-native-check-box";

export default function getOrder({ close, navigation, route }) {
  let { data } = route.params;

  let [image, setImage] = useState(
    "https://w7.pngwing.com/pngs/122/369/png-transparent-spanners-compression-fitting-coupling-piping-and-plumbing-fitting-others-miscellaneous-hand-steel.png"
  );
  let [detail, setDetail] = useState();
  let [address, setAddress] = useState();
  let [user, setUser] = useState();
  let [price, setPrice] = useState();
  const [cash_on_delavery, setcash_on_delavery] = useState(false);

  let [disable, setdisable] = useState(false);

  let DocumentPickerFUnc = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "image/*",
      multiple: false,
    });

    if (result.type === "success") {
      let uri = result.uri;
      var name = Math.random();
      var ref = await firebase.storage().ref("/").child(`service/${name}`);
      const response = await fetch(uri);
      const blob = await response.blob(uri);
      let metadata = {
        contentType: "image/jpeg",
      };
      await ref.put(blob, metadata);
      ref.getDownloadURL().then((url) => {
        setImage(url);
      });
      //   console.log(this.state.imageURL);
    } else {
    }
  };

  let BookTechnician = () => {
    if (!image) {
      alert("Please Upload Imagge");
    } else if (!detail) {
      alert("Please Enter Detail");
    } else if (!address) {
      alert("Please Enter Address");
    } else if (!price) {
      alert("Please Enter Minimum");
    } else {
      setdisable(true);
      axios
        .post(
          "https://servicesproviderapp.herokuapp.com/api/posts/booktechnician",
          {
            detail,
            address,
            image,
            uid: user._id,
            userName: user.name,
            serviceName: data.serviceName,
            serviceImage: data.serviceImage,
            price,
            cash_on_delavery,
          }
        )
        .then(function (response) {
          if (response.data.result === "success") {
            alert("Service Added Successfully");
            setDetail("");
            setAddress("");
            setdisable(false);
            navigation.navigate("OrdersStatus");
          } else {
            setdisable(false);
            alert(response.data.result);
          }
        })
        .catch(function (error) {
          console.log(error);
          setdisable(false);
          alert(error);
        });
    }
  };

  useEffect(async () => {
    let User = await AsyncStorage.getItem("User");
    if (User) {
      setUser(JSON.parse(User).user);
      console.log(User);
    }
  }, []);
  return (
    <View>
      <ScrollView>
        <ImageBackground
          source={{ uri: data.serviceImage }}
          style={styles.backimage}
        ></ImageBackground>

        <View style={styles.detailView}>
          <Text style={styles.title}>Service Name</Text>
          <Text style={styles.subtitle}>{data.serviceName} Service Name</Text>
          <Text style={styles.title}>Service Detail</Text>
          <Text style={styles.subtitle}>
            {data.serviceDetail} Service Full Detail Will be Show here Service
            Full Detail Will be Show here
          </Text>
          <View style={styles.imageView}>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <TouchableOpacity
              style={styles.uploadPic}
              onPress={() => DocumentPickerFUnc()}
            >
              <Text style={styles.uploadpicText}>Upload Pic</Text>
              <Feather name="upload" size={17} color="#0466C8" />
            </TouchableOpacity>
          </View>
          <Text style={styles.question}>Why You Want This Service ?</Text>
          <TextInput
            style={styles.textinput}
            multiline={true}
            numberOfLines={5}
            placeholder="Enter Detail ............."
            value={detail}
            onChangeText={(text) => setDetail(text)}
          />

          <Text style={styles.question}>Full Address ?</Text>
          <TextInput
            style={styles.textinput}
            multiline={true}
            numberOfLines={1}
            value={address}
            placeholder="Enter Full Address ............."
            onChangeText={(text) => setAddress(text)}
          />
          <Text style={styles.question}>Minimal Price ?</Text>
          <View style={styles.price}>
            <TextInput
              style={styles.priceInput}
              multiline={true}
              numberOfLines={1}
              value={price}
              keyboardType="numeric"
              placeholder="Enter Your Minimal Price ............."
              onChangeText={(text) => setPrice(text)}
            />
            <Text style={styles.priceText}> $/Hour</Text>
          </View>
          <Text style={styles.question}>Why You Want This Service ?</Text>

          <CheckBox
            style={styles.checkBox}
            onClick={() => setcash_on_delavery(!cash_on_delavery)}
            isChecked={cash_on_delavery}
            rightText={"Cash on delivery"}
            rightTextStyle={{
              color: "gray",
            }}
            checkBoxColor="#0466C8"
          />

          <View style={styles.buttonView}>
            <Button
              title="Book Technician "
              bgColor="#FFFFFF"
              color="#0466C8"
              width={124}
              redius={8}
              borderColor="#0466C8"
              height={45}
              disable={disable}
              onpress={async () => {
                BookTechnician();
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

let styles = StyleSheet.create({
  backimage: {
    width: "100%",
    height: 200,
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
    marginTop: 10,
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 10,
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
    marginTop: 10,
  },
  imageView: {
    width: "80%",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  uploadPic: {
    width: "40%",
    alignSelf: "center",
    margin: 15,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#0466C8",
    backgroundColor: "white",
  },
  uploadpicText: {
    color: "#0466C8",
    textAlign: "center",
  },
  textinput: {
    borderWidth: 1,
    borderColor: "#0466C8",
    padding: 10,
    textAlignVertical: "top",
    borderRadius: 10,
  },
  question: {
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: 10,
  },
  price: {
    borderWidth: 1,
    borderColor: "#0466C8",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  priceInput: {
    padding: 10,
    textAlignVertical: "top",
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  checkBox: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#0466C8",
    borderRadius: 10,
  },
});
