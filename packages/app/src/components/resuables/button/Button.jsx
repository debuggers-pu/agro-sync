import { Text, TouchableOpacity } from "react-native";
import React from "react";

const ButtonComponent = ({ onPress, label, children }) => {
  return (
    <TouchableOpacity
      className="px-4 py-4 flex-row bg-slate-500 rounded-full font-bold mb-2 place-items-center"
      onPress={onPress}
    >
      <Text className="text-white mx-4 font-bold">{label}</Text>
      {children}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
