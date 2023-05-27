import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { IndexPath, Layout, Select, SelectItem } from "@ui-kitten/components";

const CustomSelect = () => {
  const [selectedIndex, setSelectedIndex] = useState([]);

  return (
    <Layout style={styles.container} level="1">
      <Select
        style={styles.select}
        placeholder="Active"
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <SelectItem title="Option 1" />
        <SelectItem title="Option 2" />
        <SelectItem title="Option 3" />
      </Select>
      <Select
        style={styles.select}
        placeholder="Active"
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <SelectItem title="Option 1" />
        <SelectItem title="Option 2" />
        <SelectItem title="Option 3" />
      </Select>
    </Layout>
  );
};

export default CustomSelect;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 128,
  },
  select: {
    flex: 1,
    marginHorizontal: 2,
  },
});
