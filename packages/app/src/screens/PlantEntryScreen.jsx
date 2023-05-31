import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import Seperator from "../components/resuables/seperator/Seperator";

import DropDown from "../components/resuables/dropdown/DropDown";
import CustomInput from "../components/resuables/input/Input";
import Area from "../components/area/Area";
import Radio from "../components/resuables/radio/Radio";
import UserDetails from "../components/userDetails/UserDetails";

// import FontAwesome from "react-native-vector-icons/FontAwesome";

const PlantEntry = () => {
  const countries = ["Niyamit", "Chadke", "Anugaman"];
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View className="p-[24px] bg-white">
            <View className="flex justify-center ">
              <Text className="font-[700] text-xl leading-5 text-[#27374D] tracking-wide mb-[14px]">
                PLANT SURVEY
              </Text>
              <Seperator />
            </View>
            {/* Form */}

            <View className="flex-col mb-4 mt-8">
              {/* Radio Button lai clickable garaunu xa */}
              <Radio title="Type of Checking " />
            </View>

            <View className="flex-col mb-4">
              <View className="flex-row mb-2">
                <Text className="text-lg text-primary font-[500]">
                  Plant Name :{" "}
                </Text>

                <CustomInput placeholder="Enter Plant Name" />
              </View>
            </View>
            <View className="flex-col mb-4">
              <View className="flex-row mb-2">
                <Text className="text-lg text-primary font-[500]">
                  Quantity :{" "}
                </Text>

                <CustomInput placeholder="Enter Number" />
                <DropDown label={"Select Unit"} data={countries} />
              </View>
            </View>
            <Area title={"Location of checking"} />
            <Radio title="Type of Plants" />
            {/* Veichel wala it will be done after we can alter the width of dropdown */}
            <Area title={"Production Area"} />
            <UserDetails title="Sender's Details" />
            <UserDetails title="Receiver's Details" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default PlantEntry;
