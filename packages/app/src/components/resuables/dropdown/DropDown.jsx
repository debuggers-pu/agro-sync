import React, { useState } from "react";
import { Menu, TextInput, useTheme, Icon } from "react-native-paper";

const CustomDropdown = ({ options, label }) => {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    closeMenu();
  };

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
          value={selectedOption ? selectedOption.label : ""}
          onTouchStart={openMenu}
        />
      }
    >
      {options.map((option) => (
        <Menu.Item
          style={{ backgroundColor: "white" }}
          key={option.value}
          onPress={() => handleOptionSelect(option)}
          title={option.label}
        />
      ))}
    </Menu>
  );
};

export default CustomDropdown;
