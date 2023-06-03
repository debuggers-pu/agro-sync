import React, { useState } from "react";
import { Menu, TextInput, useTheme, Icon } from "react-native-paper";
import { getDistrict } from "@agri-sync/core/src/api/location/index";

const CustomDropdown = ({ options, label, handleChange }) => {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  console.log(options);
  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      icon="chevron-down"
      anchor={
        <TextInput
          style={{
            backgroundColor: "white",
            marginTop: 2,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 8,
          }}
          // className="border bg-white rounded-lg"
          label={label}
          value={selectedOption ? selectedOption : ""}
          onTouchStart={openMenu}
        />
      }
    >
      {options.map((option, index) => (
        <Menu.Item
          style={{ backgroundColor: "white" }}
          key={`${index}_opt`}
          onPress={() => {
            handleChange(option);
            setSelectedOption(option.name);
            closeMenu();
          }}
          title={option.name}
        />
      ))}
    </Menu>
  );
};

export default CustomDropdown;
