import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

const CustomTextInput = (props) => {
  const { placeholder, value, onChangeText, width } = props;

  return (
    <View style={[styles.container, { width }]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    margin: 4,
    zIndex: 30,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "black",
  },
});

export default CustomTextInput;
