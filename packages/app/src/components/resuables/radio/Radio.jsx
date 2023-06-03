import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { RadioButton, Text } from "react-native-paper";

const Radio = ({ options, label }) => {
  const [value, setValue] = useState("");

  const handleRadioButtonChange = (selectedValue) => {
    setValue(selectedValue);
  };

  return (
    <View style={styles.container}>
      <Text className="text-lg text-primary font-semibold">{label} :</Text>
      <View style={styles.options}>
        {options.map((option) => (
          <View key={option.value}>
            <RadioButton.Item
              label={option.label}
              value={option.value}
              status={value === option.value ? "checked" : "unchecked"}
              onPress={() => handleRadioButtonChange(option.value)}
              labelStyle={styles.radioButtonLabel}
              color="#007AFF"
            />
          </View>
        ))}
      </View>
      {/* <Text>Selected value: {value}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",

    marginBottom: 4,
  },
  options: {
    flexDirection: "row",
  },

  radioButtonLabel: {
    fontSize: 14,
    marginLeft: 2,
  },
});

export default Radio;
