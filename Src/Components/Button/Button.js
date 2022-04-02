import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";

export default function Button({
  title,
  bgColor,
  color,
  width,
  redius,
  onpress,
  disable,
  borderColor,
  height,
}) {
  return (
    <TouchableOpacity
      style={styles(bgColor, width, color, redius, borderColor, height).button}
      onPress={() => onpress()}
      disabled={disable}
    >
      <Text style={styles(bgColor, width, color).text}>{title}</Text>
      {disable && (
        <ActivityIndicator
          size="small"
          color="white"
          style={{ position: "absolute", marginTop: 14 }}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = (bgColor, width, color, redius, borderColor, height) => {
  return StyleSheet.create({
    button: {
      backgroundColor: bgColor,
      width: width,
      color: color,
      borderRadius: redius,
      alignContent: "center",
      alignItems: "center",
      height: height,
      marginVertical: 20,
      alignSelf: "center",
      borderColor: borderColor,
      borderWidth: 1,
      justifyContent: "center",
    },
    text: {
      color: color,
      textAlign: "center",
    },
  });
};
