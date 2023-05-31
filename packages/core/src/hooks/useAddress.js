import {
  getAddress,
  createAddress,
  deleteAddress,
  updateAddress,
} from "../api/address/address";

import { useMutation, useQuery } from "@tanstack/react-query";
// import { onOpenToast } from "@utils/toast";

function useAddress({ addressId }) {
  return useQuery([`address-${addressId}`], () => getAddress({ addressId }), {
    enabled: !!addressId,
  });
}

function useAllAddress() {
  return useQuery([`all-address`], () => getAddress(), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "All address fetched successfuly",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Address not fetched",
      });
    },
  });
}

function useCreateAddress() {
  return useMutation(["create-address"], (data) => createAddress(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Address created successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Address not created",
      });
    },
  });
}

function useUpdateAddress() {
  return useMutation(["update-address"], (data) => updateAddress(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Address Updated successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Address not created",
      });
    },
  });
}

function useDeleteAddress() {
  return useMutation(
    ["delete-address"],
    ({ addressId }) => deleteAddress({ addressId }),
    {
      onSuccess: (/*data*/) => {
        onOpenToast({
          status: "success",
          message: "Address deleted successfully",
        });
      },
      onError: (/*data*/) => {
        onOpenToast({
          status: "error",
          message: "Address not deleted",
        });
      },
    }
  );
}

export {
  useAddress,
  useAllAddress,
  useCreateAddress,
  useDeleteAddress,
  useUpdateAddress,
};
