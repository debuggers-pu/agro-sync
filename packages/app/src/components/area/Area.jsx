import React, { useState } from "react";

import { View, Text } from "react-native";
import CustomInput from "../resuables/input/Input";

import CustomDropdown from "../resuables/dropdown/DropDown";

const Area = ({ title }) => {
  const dropdownOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  return (
    <>
      <View className="flex-col mb-4">
        <Text className="text-lg text-primary font-[500] mb-4">{title}:</Text>
        <View className="flex-col mb-2">
          <Text className="text-primary text-lg font-[400] mr-4">
            Province :
          </Text>

          <CustomDropdown options={dropdownOptions} label="Select an option" />
        </View>
        <View className="flex-col mb-4">
          <Text className="text-primary text-lg font-[400] mr-4">
            Metro/Rural Municipality :
          </Text>
          <CustomDropdown options={dropdownOptions} label="Select an option" />
        </View>

        <View className="flex-row mb-2 items-center">
          <Text className="text-primary text-lg font-[400] mr-4">Ward No:</Text>
          <CustomInput placeholder="Enter ward No" />
        </View>
      </View>
    </>
  );
};

export default Area;
