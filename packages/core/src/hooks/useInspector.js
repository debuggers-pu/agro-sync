import {
  getInspector,
  createInspector,
  updateInspector,
  deleteInspector,
} from "../api/inspector/inspector";

import { useMutation, useQuery } from "@tanstack/react-query";
import { onOpenToast } from "@utils/toast";

function useInspector({ inspectorId }) {
  return useQuery(
    [`inspector-${inspectorId}`],
    () => getInspector({ inspectorId }),
    {
      enabled: !!inspectorId,
    }
  );
}

function useAllInspector() {
  return useQuery([`all-inspector`], () => getInspector(), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "All inspector fetched successfuly",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Inspector not fetched",
      });
    },
  });
}

function useCreateInspector() {
  return useMutation(["create-inspector"], (data) => createInspector(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Inspector created successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Inspector not created",
      });
    },
  });
}

function useUpdateInspector() {
  return useMutation(["update-inspector"], (data) => updateInspector(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Inspector Updated successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Inspector not created",
      });
    },
  });
}

function useDeleteInspector() {
  return useMutation(["delete-inspector"], (data) => deleteInspector(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Inspector Deleted successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Inspector not Deleted",
      });
    },
  });
}

export {
  useInspector,
  useAllInspector,
  useCreateInspector,
  useUpdateInspector,
  useDeleteInspector,
};
