import { Input, Layout, Select, SelectItem } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import Seperator from "../components/resuables/seperator/Seperator";
import CustomSelect from "../components/resuables/Select/CustomSelect";

const PlantEntry = () => {
  return (
    <View className="p-[24px]">
      <View className="flex justify-center mt-[42px] mb-[42px]">
        <Text className="font-bold text-[18px] line-height-[22px] text-[#27374D] tracking-wide mb-[14px]">
          PLANT SURVEY
        </Text>
        <Seperator />
      </View>
      <View className="flex flex-row">
        <Text>Type of Checking : </Text>
      </View>
      <CustomSelect className="w-36" />
    </View>
  );
};

export default PlantEntry;
