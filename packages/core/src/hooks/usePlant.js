import {
  getPlant,
  createPlant,
  updatePlant,
  deletePlant,
} from "../api/plant/plant";

import { useMutation, useQuery } from "@tanstack/react-query";
import { onOpenToast } from "@utils/toast";

function usePlant({ plantId }) {
  return useQuery([`plant-${plantId}`], () => getPlant({ plantId }), {
    enabled: !!plantId,
  });
}

function useAllPlant() {
  return useQuery([`all-plant`], () => getPlant(), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "All plant fetched successfuly",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Plant not fetched",
      });
    },
  });
}

function useCreatePlant() {
  return useMutation(["create-plant"], (data) => createPlant(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Plant created successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Plant not created",
      });
    },
  });
}

function useUpdatePlant() {
  return useMutation(["update-plant"], (data) => updatePlant(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Plant Updated successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Plant not created",
      });
    },
  });
}

function useDeletePlant() {
  return useMutation(["delete-plant"], (data) => deletePlant(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Plant Deleted successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Plant not created",
      });
    },
  });
}

export {
  usePlant,
  useAllPlant,
  useCreatePlant,
  useUpdatePlant,
  useDeletePlant,
};
