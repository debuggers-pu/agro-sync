import {
  getSender,
  createSender,
  updateSender,
  deleteSender,
} from "../api/sender/sender";

import { useMutation, useQuery } from "@tanstack/react-query";
import { onOpenToast } from "@utils/toast";

function useSender({ senderId }) {
  return useQuery([`sender-${senderId}`], () => getSender({ senderId }), {
    enabled: !!senderId,
  });
}

function useAllSender() {
  return useQuery([`all-sender`], () => getSender(), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "All sender fetched successfuly",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Sender not fetched",
      });
    },
  });
}

function useCreateSender() {
  return useMutation(["create-sender"], (data) => createSender(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Sender created successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Sender not created",
      });
    },
  });
}

function useUpdateSender() {
  return useMutation(["update-sender"], (data) => updateSender(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Sender Updated successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Sender not created",
      });
    },
  });
}

function useDeleteSender() {
  return useMutation(["delete-sender"], (data) => deleteSender(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Sender Deleted successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Sender not created",
      });
    },
  });
}

export {
  useSender,
  useAllSender,
  useCreateSender,
  useUpdateSender,
  useDeleteSender,
};
