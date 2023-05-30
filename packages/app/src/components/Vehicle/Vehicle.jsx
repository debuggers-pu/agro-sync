import React from "react";
import DropDown from "../resuables/dropdown/DropDown";
import { View, Text } from "react-native";
import CustomInput from "../resuables/input/Input";

const Vehicle = ({ title }) => {
  const countries = ["Niyamit", "Chadke", "Anugaman"];
  return (
    <>
      <View className="flex-col mb-4">
        <Text className="text-lg text-primary font-[500] mb-4">{title}:</Text>
        <View className="flex-row mb-2">
          <Text className="text-primary text-lg font-[500] mr-4">
            Province :
          </Text>
          <DropDown label={"Select the Province"} data={countries} />
        </View>
        <View className="flex-row mb-4">
          <Text className="text-primary text-lg font-[500] mr-4">
            Metro/Rural Municipality :
          </Text>
          <DropDown label={"Select local body"} data={countries} />
        </View>

        <View className="flex-row mb-2">
          <Text className="text-primary text-lg font-[500] mr-4">Ward No:</Text>
          <CustomInput placeholder="Enter ward No" />
        </View>
      </View>
    </>
  );
};

export default Vehicle;
