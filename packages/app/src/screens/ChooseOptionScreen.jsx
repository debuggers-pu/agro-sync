import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import bg from "../assets/bg.png";
import animal from "../assets/animal.png";
import plant from "../assets/plant.png";
import ButtonComponent from "../components/resuables/button/Button";
import { useNavigation } from "@react-navigation/native";

const ChooseOptionScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 justify-center">
      <ImageBackground
        source={bg}
        resizeMode="cover"
        className="flex-1 items-center justify-center"
      >
        <Text className="font-semibold font-Poppins line-height-[30px] text-center text-[24px] text-[#27374D]">
          What do you want to {"\n"} survey?
        </Text>
        <View className="mt-3">
          <ButtonComponent
            label="Animal"
            onPress={() => navigation.navigate("Animal")}
          >
            <Image source={animal} />
          </ButtonComponent>
          <ButtonComponent
            label="Plant"
            onPress={() => navigation.navigate("Plant")}
          >
            <Image source={plant} />
          </ButtonComponent>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChooseOptionScreen;
