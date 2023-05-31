import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { StyleSheet } from "react-native";

const DropDown = ({ data, label }) => {
  return (
    <>
      <SelectDropdown
        defaultButtonText={label}
        buttonStyle={styles.dropdown1BtnStyle}
        dropdownStyle={styles.dropDownStyle}
        dropdownIconPosition={"right"}
        data={data}
        // renderDropdownIcon={(isOpened) => {
        //   return (
        //     <FontAwesome
        //       name={isOpened ? "chevron-up" : "chevron-down"}
        //       color={"#444"}
        //       size={18}
        //     />
        //   );
        // }}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  dropdown1BtnStyle: {
    fontSize: 14,
    // width: 200,
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#27374D",
  },
  dropDownStyle: {
    borderRadius: 6,
  },
});

export default DropDown;
