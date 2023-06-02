import {
  getReceiver,
  createReceiver,
  updateReceiver,
  deleteReceiver,
} from "../api/receiver/receiver";

import { useMutation, useQuery } from "@tanstack/react-query";
import { onOpenToast } from "@utils/toast";

function useReceiver({ receiverId }) {
  return useQuery(
    [`receiver-${receiverId}`],
    () => getReceiver({ receiverId }),
    {
      enabled: !!receiverId,
    }
  );
}

function useAllReceiver() {
  return useQuery([`all-receiver`], () => getReceiver(), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "All receiver fetched successfuly",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Receiver not fetched",
      });
    },
  });
}

function useCreateReceiver() {
  return useMutation(["create-receiver"], (data) => createReceiver(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Receiver created successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Receiver not created",
      });
    },
  });
}

function useUpdateReceiver() {
  return useMutation(["update-receiver"], (data) => updateReceiver(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Receiver Updated successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Receiver not created",
      });
    },
  });
}

function useDeleteReceiver() {
  return useMutation(["delete-receiver"], (data) => deleteReceiver(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Receiver Deleted successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Receiver not Deleted",
      });
    },
  });
}

export {
  useReceiver,
  useAllReceiver,
  useCreateReceiver,
  useUpdateReceiver,
  useDeleteReceiver,
};
