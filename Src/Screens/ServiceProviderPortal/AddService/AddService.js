import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import firebase from "firebase";
import axios from "axios";

export default function AddService() {
  let [serviceName, setServiceName] = useState("");
  let [serviceDetail, setServiceDetail] = useState("");
  let [serviceImage, setServiceImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMiU5Jxbvtw3v9n7J90nvNX7spyGD5r6l6uw&usqp=CAU"
  );
  const [spinner, setSpinner] = useState(false);
  const [ButtonSpiner, setButtonSpiner] = useState(false);

  let DocumentPickerFUnc = async () => {
    setSpinner(true);
    let result = await DocumentPicker.getDocumentAsync({
      type: "image/*",
      multiple: false,
    });

    if (result.type === "success") {
      let uri = result.uri;
      var name = Math.random();
      var ref = await firebase.storage().ref("/").child(`order/${name}`);
      const response = await fetch(uri);
      const blob = await response.blob(uri);
      let metadata = {
        contentType: "image/jpeg",
      };
      await ref.put(blob, metadata);
      ref.getDownloadURL().then((url) => {
        setServiceImage(url);
        setSpinner(false);
      });
      //   console.log(this.state.imageURL);
    } else {
      setSpinner(false);
    }
  };

  let addServiceFunc = () => {
    if (!serviceName) {
      alert("Please Enter Service Name");
    } else if (!serviceDetail) {
      alert("Please Enter Service Detail");
    } else if (!serviceImage) {
      alert("Please Select Service Image");
    } else {
      setButtonSpiner(true);
      axios
        .post(
          "https://servicesproviderapp.herokuapp.com/api/posts/addservice",
          {
            serviceName,
            serviceDetail,
            serviceImage,
          }
        )
        .then(function (response) {
          if (response.data.result === "success") {
            alert("Service Added Successfully");
            setServiceName("");
            setServiceDetail("");
            setServiceImage(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMiU5Jxbvtw3v9n7J90nvNX7spyGD5r6l6uw&usqp=CAU"
            );
            setButtonSpiner(false);
            console.log(response.data);
          } else {
            alert(response.data.result);
          }
        })
        .catch(function (error) {
          console.log(error);
          alert(error);
        });
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: serviceImage }} style={styles.background}>
        {spinner && (
          <ActivityIndicator
            size="large"
            color="white"
            style={{
              marginTop: 50,
            }}
          />
        )}
        <TouchableOpacity
          style={styles.addimage}
          onPress={() => DocumentPickerFUnc()}
        >
          <MaterialIcons name="add-a-photo" size={28} color="black" />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.form}>
        <Text style={styles.title}>Service Name</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Enter Service Name"
          value={serviceName}
          onChangeText={(text) => setServiceName(text)}
        />

        <Text style={styles.title}>Service Detail</Text>
        <TextInput
          style={styles.textarea}
          placeholder="Enter Service Detail"
          multiline={true}
          numberOfLines={5}
          value={serviceDetail}
          onChangeText={(text) => setServiceDetail(text)}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => addServiceFunc()}
        >
          {!ButtonSpiner ? (
            <Text style={styles.addtitle}>ADD SERVICE</Text>
          ) : (
            <ActivityIndicator
              size="small"
              color="white"
              style={{
                alignSelf: "center",
              }}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  background: {
    width: "100%",
    height: 150,
  },
  addimage: {
    marginTop: 110,
    backgroundColor: "white",
    position: "absolute",
    // marginLeft: "48%",
    padding: 25,
    alignSelf: "center",
    borderRadius: 50,
  },
  textinput: {
    borderWidth: 2,
    borderColor: "#0466C8",
    height: 40,
    borderRadius: 5,
    padding: 10,
  },
  textarea: {
    borderWidth: 2,
    borderColor: "#0466C8",
    borderRadius: 5,
    padding: 10,
    textAlignVertical: "top",
  },
  form: {
    marginTop: 50,
  },
  title: {
    fontWeight: "bold",
    marginVertical: 10,
    color: "#0466C8",
  },
  addButton: {
    alignItems: "center",
    backgroundColor: "#0466C8",
    marginTop: 50,
    padding: 15,
    borderRadius: 10,
    width: "60%",
    alignSelf: "center",
  },
  addtitle: {
    color: "white",
    fontWeight: "bold",
  },
});
