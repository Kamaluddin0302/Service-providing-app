import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function Textinput({
  require,
  text,
  width,
  subTittle,
  GetInputVlue,
  name,
  security,
  onBlur,
  type,
  value,
}) {
  return (
    <View style={styles().container}>
      <Text style={styles().emailText}> {text}</Text>
      <TextInput
        style={styles(width).input}
        selectionColor={"gray"}
        secureTextEntry={security}
        onBlur={() => onBlur && onBlur()}
        keyboardType={type && type}
        // placeholder={text ? text : subTittle}
        placeholderTextColor="gray"
        value={value && value}
        onChangeText={(text) => GetInputVlue(text)}
      />
      {/* {subTittle && <Text style={styles().subTittle}>{subTittle}</Text>} */}
    </View>
  );
}
const styles = (width) => {
  return StyleSheet.create({
    container: { paddingVertical: 15 },
    input: {
      // borderWidth: 1,
      // borderColor: "gray",
      width: width,
      backgroundColor: "white",
      height: 30,
      borderBottomColor: "black",
      borderBottomWidth: 1,
      marginLeft: 5,
    },
    emailText: {
      fontWeight: "bold",
      color: "gray",
    },
  });
};
