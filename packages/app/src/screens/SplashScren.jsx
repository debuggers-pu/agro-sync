import React from "react";
import { withExpoSnack } from "nativewind";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import image from "../assets/bg.png";
import { Button } from "react-native-paper";

const SplashScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View>
        <Text className="font-medium line-height-28 text-center">
          Welcome to
        </Text>
        <Text style={styles.h2}>Hamro Agro</Text>
        <Text style={styles.h3}>
          Ultimate application to survey all {"\n"}
          agro-products
        </Text>
      </View>
      <View>
        <Button className="rounded-full w-32 bg-black"> hello</Button>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  h1: {
    color: "#27374D",
    fontSize: 30,
    lineHeight: 44,
    fontWeight: "bold",
    textAlign: "center",
  },
  h2: {
    color: "#27374D",
    fontSize: 36,
    lineHeight: 44,
    fontWeight: "bold",
    textAlign: "center",
  },
  h3: {
    color: "#27374D",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "regular",
    textAlign: "center",
  },
});

export default withExpoSnack(SplashScreen);
