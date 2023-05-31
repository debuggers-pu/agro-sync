import {
  getPlantValue,
  createPlantValue,
  updatePlantValue,
  deletePlantValue,
} from "../plantValue/plantValue";

import { useMutation, useQuery } from "@tanstack/react-query";
import { onOpenToast } from "@utils/toast";

function usePlantValue({ plantValueId }) {
  return useQuery(
    [`plantValue-${plantValueId}`],
    () => getPlantValue({ plantValueId }),
    {
      enabled: !!plantValueId,
    }
  );
}

function useAllPlantValue() {
  return useQuery([`all-plantValue`], () => getPlantValue(), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "All plantValue fetched successfuly",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "PlantValue not fetched",
      });
    },
  });
}

function useCreatePlantValue() {
  return useMutation(["create-plantValue"], (data) => createPlantValue(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "PlantValue created successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "PlantValue not created",
      });
    },
  });
}

function useUpdatePlantValue() {
  return useMutation(["update-plantValue"], (data) => updatePlantValue(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "PlantValue Updated successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "PlantValue not created",
      });
    },
  });
}

function useDeletePlantValue() {
  return useMutation(["delete-plantValue"], (data) => deletePlantValue(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "PlantValue deleted successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "PlantValue not deleted",
      });
    },
  });
}

export {
  usePlantValue,
  useAllPlantValue,
  useCreatePlantValue,
  useUpdatePlantValue,
  useDeletePlantValue,
};
