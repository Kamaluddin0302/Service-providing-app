import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, LogBox } from "react-native";
import StackNavigator from "./Src/Config/Navigation/StackNavigation";
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <StackNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
