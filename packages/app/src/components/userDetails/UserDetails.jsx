import React, { useState } from "react";
import DropDown from "../resuables/dropdown/DropDown";
import { View, Text } from "react-native";
import CustomInput from "../resuables/input/Input";
import CustomDropdown from "../resuables/dropdown/DropDown";

const UserDetails = ({ title }) => {
  const dropdownOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  return (
    <>
      <View className="flex-col mb-4">
        <Text className="text-lg text-primary font-[500] mb-4">{title}:</Text>
        <View className="flex-row items-center mb-2">
          <Text className="text-primary text-lg font-[400] mr-4">
            Full Name:
          </Text>
          <CustomInput placeholder="Enter Full Name" />
        </View>
        <View className="flex-row items-center mb-2">
          <Text className="text-primary text-lg font-[400] mr-4">
            Phone No:
          </Text>
          <CustomInput placeholder="Enter Phone Number" />
        </View>
        <View className="flex-col mb-4">
          <Text className="text-primary text-lg font-[400] mr-4">
            Province :
          </Text>
          <CustomDropdown options={dropdownOptions} label="Select an option" />
        </View>
        <View className="flex-col mb-4">
          <Text className="text-primary text-lg font-[400] mr-4">
            District :
          </Text>
          <CustomDropdown options={dropdownOptions} label="Select an option" />
        </View>
        <View className="flex-col mb-4">
          <Text className="text-primary text-lg font-[400] mr-4">
            Metro/Rural Municipality: :
          </Text>
          <CustomDropdown options={dropdownOptions} label="Select an option" />
        </View>
        <View className="flex-row items-center mb-2">
          <Text className="text-primary text-lg font-[400] mr-4">Ward No:</Text>
          <CustomInput placeholder="Enter Ward No" />
        </View>
      </View>
    </>
  );
};

export default UserDetails;
