import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const CustomInput = ({ value, placeholder }) => {
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 150,
    height: 40,
    backgroundColor: "white",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    border: "#27374D",
  },
});

export default CustomInput;
