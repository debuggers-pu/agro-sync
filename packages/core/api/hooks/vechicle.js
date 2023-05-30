import {
  getVechicle,
  createVecicle,
  updateVechicle,
  deleteVechicle,
} from "../vechicle/vechile";

import { useMutation, useQuery } from "@tanstack/react-query";
import { onOpenToast } from "@utils/toast";

function useVechicle({ vechicleId }) {
  return useQuery(
    [`vechicle-${vechicleId}`],
    () => getVechicle({ vechicleId }),
    {
      enabled: !!vechicleId,
    }
  );
}

function useAllVechicle() {
  return useQuery([`all-vechicle`], () => getVechicle(), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "All vechicle fetched successfuly",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Vechicle not fetched",
      });
    },
  });
}

function useCreateVechicle() {
  return useMutation(["create-vechicle"], (data) => createVecicle(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Vechicle created successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Vechicle not created",
      });
    },
  });
}

function useUpdateVechicle() {
  return useMutation(["update-vechicle"], (data) => updateVechicle(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Vechicle Updated successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Vechicle not created",
      });
    },
  });
}

function useDeleteVechicle() {
  return useMutation(["delete-vechicle"], (data) => deleteVechicle(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Vechicle Deleted successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Vechicle not Deleted",
      });
    },
  });
}

export {
  useVechicle,
  useAllVechicle,
  useCreateVechicle,
  useUpdateVechicle,
  useDeleteVechicle,
};
