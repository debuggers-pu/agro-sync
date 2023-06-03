import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import Seperator from "../components/resuables/seperator/Seperator";
import CustomInput from "../components/resuables/input/Input";
import Area from "../components/area/Area";
import Radio from "../components/resuables/radio/Radio";
import UserDetails from "../components/userDetails/UserDetails";
import CustomDropdown from "../components/resuables/dropdown/DropDown";
import { Button } from "react-native-paper";

const PlantEntry = () => {
  const dropdownOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const radioOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View className="p-[24px] bg-white place-items-center">
            <View className="flex justify-center ">
              <Text className="font-[700] text-xl leading-5 text-[#27374D] tracking-wide mb-[14px]">
                PLANT SURVEY
              </Text>
              <Seperator />
            </View>
            {/* Form */}

            <View className="flex-col mb-4 mt-8">
              {/* Radio Button lai clickable garaunu xa */}
              <Radio options={radioOptions} label={"Type of Checking"} />
            </View>

            <View className="flex-col mb-4">
              <View className="flex-row items-center mb-2">
                <Text className="text-lg text-primary font-[500]">
                  Plant Name :{" "}
                </Text>

                <CustomInput placeholder="Enter Plant Name" />
              </View>
            </View>
            <View className="flex-col mb-4">
              <View className="flex-col mb-2">
                <Text className="text-lg text-primary font-[500]">
                  Quantity :{" "}
                </Text>

                <CustomInput placeholder="Enter Number" />
                <CustomDropdown
                  options={dropdownOptions}
                  label="Select an option"
                />
              </View>
            </View>
            <Area title={"Location of checking"} />
            <Radio options={radioOptions} label={"Type of Plants "} />
            {/* Veichel wala it will be done after we can alter the width of dropdown */}
            {/* <Area title={"Production Area"} /> */}
            <UserDetails title="Sender's Details" />
            <UserDetails title="Receiver's Details" />

            <Button className="bg-primary rounded-md ">
              <Text className="text-[#f2f2f2] p-4">Submit</Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default PlantEntry;
