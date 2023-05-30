import React from "react";
import DropDown from "../resuables/dropdown/DropDown";
import { View, Text } from "react-native";
import CustomInput from "../resuables/input/Input";

const UserDetails = ({ title }) => {
  const countries = ["Niyamit", "Chadke", "Anugaman"];
  return (
    <>
      <View className="flex-col mb-4">
        <Text className="text-lg text-primary font-[500] mb-4">{title}:</Text>
        <View className="flex-row mb-2">
          <Text className="text-primary text-lg font-[400] mr-4">
            Full Name:
          </Text>
          <CustomInput placeholder="Enter Full Name" />
        </View>
        <View className="flex-row mb-2">
          <Text className="text-primary text-lg font-[400] mr-4">
            Phone No:
          </Text>
          <CustomInput placeholder="Enter Phone Number" />
        </View>
        <View className="flex-row mb-4">
          <Text className="text-primary text-lg font-[400] mr-4">
            Province :
          </Text>
          <DropDown label={"Select local body"} data={countries} />
        </View>
        <View className="flex-row mb-4">
          <Text className="text-primary text-lg font-[400] mr-4">
            District :
          </Text>
          <DropDown label={"Select local body"} data={countries} />
        </View>
        <View className="flex-row mb-4">
          <Text className="text-primary text-lg font-[400] mr-4">
            Metro/Rural Municipality: :
          </Text>
          <DropDown label={"Select local body"} data={countries} />
        </View>
        <View className="flex-row mb-2">
          <Text className="text-primary text-lg font-[400] mr-4">
            Phone No:
          </Text>
          <CustomInput placeholder="Enter Ward No" />
        </View>
      </View>
    </>
  );
};

export default UserDetails;
