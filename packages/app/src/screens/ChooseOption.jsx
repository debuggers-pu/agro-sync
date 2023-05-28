import React from "react";
import { withExpoSnack } from "nativewind";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
import bg from "../assets/bg.png";
import animal from "../assets/animal.png";
import plant from "../assets/plant.png";

const ChooseOption = () => (
  <View style={styles.container}>
    <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
      <View>
        <Text className="font-semibold font-Poppins line-height-[30px] text-center text-[24px] text-[#27374D]">
          What do you want to {"\n"} survey?
        </Text>
      </View>
      <View>
        <Button className="rounded-full w-52  bg-[#27374D] mb-[16px] mt-[36px]">
          <Image source={animal} />
          <Text className="text-[#F2F2F2] pl-1 text-[14px] font-[500px] line-height-[21px]">
            Animals
          </Text>{" "}
        </Button>
        <Button className="rounded-full w-52 bg-[#27374D]">
          <Image source={plant} className="mr-4" />
          <Text className="text-[#F2F2F2] text-[14px] font-[500px] line-height-[21px]">
            Plants
          </Text>{" "}
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

export default withExpoSnack(ChooseOption);
