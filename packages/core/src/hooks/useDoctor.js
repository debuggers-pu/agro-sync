import {
  getDoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} from "../api/doctor/doctor";

import { useMutation, useQuery } from "@tanstack/react-query";
import { onOpenToast } from "@utils/toast";

function useDoctor({ doctorId }) {
  return useQuery([`doctor-${doctorId}`], () => getDoctor({ doctorId }), {
    enabled: !!doctorId,
  });
}

function useAllDoctor() {
  return useQuery([`all-doctor`], () => getDoctor(), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "All doctor fetched successfuly",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Doctor not fetched",
      });
    },
  });
}

function useCreateDoctor() {
  return useMutation(["create-doctor"], (data) => createDoctor(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Doctor created successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Doctor not created",
      });
    },
  });
}

function useUpdateDoctor() {
  return useMutation(["update-doctor"], (data) => updateDoctor(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Doctor Updated successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Doctor not created",
      });
    },
  });
}

function useDeleteDoctor() {
  return useMutation(["delete-doctor"], (data) => deleteDoctor(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Doctor Deleted successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Doctor not Deleted",
      });
    },
  });
}

export {
  useDoctor,
  useAllDoctor,
  useCreateDoctor,
  useUpdateDoctor,
  useDeleteDoctor,
};
