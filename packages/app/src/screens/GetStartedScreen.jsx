import React from "react";
import { ImageBackground, Text, View } from "react-native";
import bg from "../assets/bg.png";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../components/resuables/button/Button";

const GetStartedScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center">
      <ImageBackground
        source={bg}
        resizeMode="cover"
        className="flex-1 justify-center items-center"
      >
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
        <ButtonComponent
          label="Get Started"
          onPress={() => navigation.navigate("Choose")}
        ></ButtonComponent>
      </ImageBackground>
    </View>
  );
};

export default GetStartedScreen;
