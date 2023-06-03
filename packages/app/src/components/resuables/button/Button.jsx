import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ButtonComponent = ({ onPress, label, children }) => {
  return (
    <View className="bg-primary rounded-full mb-4">
      <TouchableOpacity
        className="px-8 py-2  flex-row bg-slate-500 rounded-full font-bold mb-2 items-center"
        onPress={onPress}
      >
        <Text className="text-[#F2F2F2] mx-4 font-bold">{label}</Text>
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;
