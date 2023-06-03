import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import {
  getProvinces,
  getDistrict,
  getMunicipality,
} from "@agri-sync/core/src/api/location/index";
import CustomInput from "../resuables/input/Input";
import CustomDropdown from "../resuables/dropdown/DropDown";

const Area = ({ title }) => {
  const [provinceList, setProvinceList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [municipalityList, setMunicipalityList] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState();
  const [selctedDistrict, setSelectedDistrict] = useState();

  useEffect(() => {
    const getProvince = async () => {
      const res = await getProvinces();
      setProvinceList(res);
    };
    getProvince();
  }, []);
  if (!provinceList) return null;

  const handleProvinceChange = async (opt) => {
    if (opt.province_id) {
      const districtList = await getDistrict(opt.province_id);
      setDistrictList(districtList);
    }
  };

  const handleDistrictChange = async (opt) => {
    if (opt.district_id) {
      const munList = await getMunicipality(opt.district_id);
      setMunicipalityList(munList);
      console.log(munList);
    }
  };

  const handleMunicipalityChange = async (opt) => {
    if (opt.municipality_id) {
      console.log("Done");
    }
  };

  return (
    <>
      <View className="flex-col mb-4">
        <Text className="text-lg text-primary font-[500] mb-4">{title}:</Text>
        <View className="flex-col mb-2">
          <CustomDropdown
            options={provinceList ?? []}
            label="Select Province"
            handleChange={handleProvinceChange}
          />
        </View>
        <View className="flex-col mb-4">
          <CustomDropdown
            options={districtList ?? []}
            label="Select District"
            handleChange={handleDistrictChange}
          />
        </View>
        <View className="flex-col mb-4">
          <CustomDropdown
            options={municipalityList ?? []}
            label="Select Metro/Rural Municipality :"
            handleChange={handleMunicipalityChange}
          />
        </View>

        <View className="flex-row mb-2 items-center">
          <CustomInput placeholder="Enter ward No" />
        </View>
      </View>
    </>
  );
};

export default Area;
