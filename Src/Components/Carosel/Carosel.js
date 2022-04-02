import React from "react";
import { View, Text } from "react-native";
import Carousel, {
  ParallaxImage,
  Pagination,
} from "react-native-snap-carousel";
import { Dimensions, StyleSheet } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export default class MyCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: [
        {
          illustration: require("./../../Assests/slider1.png"),
        },
        {
          illustration: require("./../../Assests/slider1.png"),
        },
        {
          illustration: require("./../../Assests/slider1.png"),
        },
        {
          illustration: require("./../../Assests/slider1.png"),
        },
      ],
      activeSlide: 0,
    };
  }

  _renderItem({ item, index }, parallaxProps) {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={item.illustration}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  }

  get pagination() {
    const { entries, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          //   marginHorizontal: 2,
          backgroundColor: "#0466C8",
        }}
        containerStyle={{
          marginTop: -50,
        }}
        inactiveDotStyle={{
          backgroundColor: "white",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  render() {
    return (
      <View>
        <Carousel
          sliderWidth={screenWidth}
          sliderHeight={screenWidth - 120}
          itemWidth={screenWidth}
          data={this.state.entries}
          renderItem={this._renderItem}
          hasParallaxImages={true}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
        />
        {this.pagination}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: screenWidth,
    height: 290,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 25,
  },
  image: {
    resizeMode: "cover",
  },
});
