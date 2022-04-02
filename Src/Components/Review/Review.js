import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";

export default function Review({ data }) {
  let [show, setshow] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={data.image} />
        <View style={styles.right}>
          <Text style={styles.name}>{data.name}</Text>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={15}
            startingValue={5}
            readonly={true}
            style={{
              alignSelf: "flex-start",
            }}
            ratingContainerStyle={{}}
          />
        </View>
      </View>
      <View style={styles.detailView}>
        <Text style={styles.Detail}>
          {data.Detail.slice(0, 220)}
          {!show ? (
            <Text style={styles.seeMore} onPress={() => setshow(true)}>
              ... Read more
            </Text>
          ) : (
            data.Detail.slice(220)
          )}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  right: {
    marginLeft: 10,
  },
  Detail: {
    lineHeight: 22,
    textAlign: "justify",
    marginVertical: 10,
  },
  detailView: {
    flexDirection: "row",
  },
  seeMore: {
    color: "blue",
  },
});
