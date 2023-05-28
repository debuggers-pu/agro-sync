import React from "react";
import { withExpoSnack } from "nativewind";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import bg from "../assets/bg.png";
import { Button } from "react-native-paper";
import arrowright from "../assets/arrow.png";

const GetStarted = () => (
  <View style={styles.container}>
    <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
      <View>
        <Text className="font-medium line-height-[30px] text-center text-[24px] text-[#27374D]">
          Welcome to
        </Text>
        <Text className="font-medium x text-center text-[36px] text-[#27374D] mb-[12px]">
          Hamro Agro
        </Text>
        <Text className="font-regular text-[16px] text-center  line-height-[20px] text-[#27374D] mb-[35px]">
          Ultimate application to survey all {"\n"}
          agro-products
        </Text>
      </View>
      <View>
        <Button className="rounded-full w-36  bg-[#27374D]">
          <Text className="text-[#F2F2F2]">Get Started</Text>{" "}
          <Image source={arrowright} className="ml-12" />
        </Button>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default withExpoSnack(GetStarted);
