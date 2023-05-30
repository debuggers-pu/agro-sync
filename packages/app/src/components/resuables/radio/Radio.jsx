import React from "react";
import { Text, View } from "react-native";
import { RadioButton, RadioGroup } from "react-native-flexi-radio-button";

const Radio = ({ title }) => {
  // onSelect (index,value){

  // }
  return (
    <>
      <View className="mb-4">
        <Text className="text-lg text-primary font-[500]">{title}:</Text>
        <RadioGroup
          onSelect={(index, value) => this.onSelect(index, value)}
          className="flex flex-row"
        >
          <RadioButton value={"item1"}>
            <Text> item #1</Text>
          </RadioButton>

          <RadioButton value={"item2"}>
            <Text> item #2</Text>
          </RadioButton>

          <RadioButton value={"item3"}>
            <Text> item #3</Text>
          </RadioButton>
        </RadioGroup>
      </View>
    </>
  );
};

export default Radio;
