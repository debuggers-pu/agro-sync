import React from "react";
import { View, Text } from "react-native";
import Seperator from "../components/resuables/seperator/Seperator";

const PlantEntry = () => {
  return (
    <View className="p-[24px]">
      <View className="flex justify-center ">
        <Text className="font-bold text-[18px] line-height-[22px] text-[#27374D] tracking-wide mb-[14px]">
          PLANT SURVEY
        </Text>
        <Seperator />
      </View>
      <View className="flex-col">
        <Text>Type of Checking : </Text>
      </View>
    </View>
  );
};

export default PlantEntry;
