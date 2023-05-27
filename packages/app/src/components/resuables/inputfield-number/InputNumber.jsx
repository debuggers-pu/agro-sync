import React, { useState } from "react";
import { Input } from "@ui-kitten/components";

const InputNumber = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      placeholder="Place your Text"
      keyboardType="numeric"
      value={value}
      onChangeText={(nextValue) => setValue(nextValue)}
      maxLength={10}
    />
  );
};

export default InputNumber;
