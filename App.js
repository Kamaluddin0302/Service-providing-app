import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, LogBox } from "react-native";
import StackNavigator from "./Src/Config/Navigation/StackNavigation";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

//import firebase config from firebase file
import config from "./Src/Config/firebase";
//for ignore yellow box
LogBox.ignoreLogs(["Setting a timer for a long period of time"]);
LogBox.ignoreAllLogs();

// connect Firebase with app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase
    .firestore()
    .settings({ experimentalForceLongPolling: true, merge: true }); // this is for to remove setting time warning..
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <StackNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
