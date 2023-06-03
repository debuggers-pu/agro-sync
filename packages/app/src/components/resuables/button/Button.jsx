import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ButtonComponent = ({ onPress, label, children }) => {
  return (
    <View className="bg-primary rounded-full mb-2 w-60">
      <TouchableOpacity
        className="px-8 py-2 flex-row text-center mb-2 justify-center items-center"
        onPress={onPress}
      >
        <Text className="text-[#F2F2F2] mx-4 text-[14px] leading-5 font-[500]">
          {label}
        </Text>
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;
