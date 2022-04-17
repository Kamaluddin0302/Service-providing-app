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
import MainCard from "./../../../Components/MainCard/MainCard";
import MoreCard from "./../../../Components/MoreCard/MoreCard";
import BottomSheet from "./../../../Components/BottomSheet/BottomSheet";
import RBSheet from "react-native-raw-bottom-sheet";
import AdminSerivceCard from "../../../Components/AdminSrviceCard/AdminServiceCard";
import { getallService } from "../../../Config/function";
import Toast from "react-native-smart-toast-alert";

export default function ServiceHome({ navigation }) {
  const windowHeight = Dimensions.get("window").height;

  let [services, setServices] = useState();

  let RefreshData = async (val) => {
    console.log(val);
    if (val === "error") {
      Toast.showToast("Some thing is wrong", "red");
    } else {
      let getallServices = await getallService();
      setServices(getallServices);

      console.log(getallServices);
      if (val === "delete") {
        Toast.showToast("Deleted Successfully", "green");
      }
    }
  };

  useEffect(async () => {
    const unsubscribe = navigation.addListener("focus", () => {
      RefreshData();
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Toast />

        <View style={styles.searchView}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a Services"
          />
          <EvilIcons name="search" size={25} color={"gray"} />
        </View>

        <View>
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
          <Text style={styles.more}>Much More</Text>
          {services?.map((v, i) => (
            <AdminSerivceCard
              key={i}
              data={v}
              type="admin"
              RefreshData={RefreshData}
            />
          ))}
        </View>
      </View>

      {/* <RBSheet
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
});
